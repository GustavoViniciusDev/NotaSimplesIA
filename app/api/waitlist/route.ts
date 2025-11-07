import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
     const body = await request.json();
    console.log("📦 Dados recebidos no backend:", body);
    const { name, email, profession, recaptchaToken } = body;

    if (!name || !email || !profession || !recaptchaToken) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando." },
        { status: 400 }
      );
    }

    // 🔒 Verifica o reCAPTCHA
        const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
        const verifyResponse = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
          { method: "POST" }
        );
    
        const verifyData: RecaptchaResponse = await verifyResponse.json();
    
        if (!verifyData.success) {
          return NextResponse.json(
            { error: "Falha na verificação do reCAPTCHA." },
            { status: 400 }
          );
        }

    // 💾 Inserção segura no Supabase
    const { error } = await supabase
      .from("waitlist_interest")
      .insert([{ name, email, profession }]);

    if (error) throw error;

    return NextResponse.json(
      { message: "Inscrição salva com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erro na rota /waitlist:", error);
    return NextResponse.json(
      { error: "Erro ao salvar inscrição.", details: String(error) },
      { status: 500 }
    );
  }
}
