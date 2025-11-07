import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

type RecaptchaResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
    const { name, email, recaptchaToken } = await request.json();

    if (!name || !email || !recaptchaToken) {
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

    // 💾 Salva no Supabase
    const { error } = await supabase
      .from("real_interest")
      .insert([{ name, email }]);

    if (error) throw error;

    return NextResponse.json(
      { message: "Interesse real salvo com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao salvar interesse real." },
      { status: 500 }
    );
  }
}
