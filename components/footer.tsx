"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground/2 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg text-primary">
              <div className="w-5 h-5 bg-gradient-to-br from-primary to-primary/70 rounded-md" />
              NotaSimples IA
            </div>
            <p className="text-sm text-foreground/70">Sua gestão fiscal no piloto automático.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Segurança
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 NotaSimples IA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
