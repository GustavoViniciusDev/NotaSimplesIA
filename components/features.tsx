"use client"

import { MessageSquare, Zap, TrendingUp } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "IA que entende o que você diz",
    description: "Gera sua nota automaticamente com comandos em linguagem natural",
  },
  {
    icon: Zap,
    title: "Preenchimento automático e cálculos instantâneos",
    description: "Economize tempo com automação inteligente de todos os campos",
  },
  {
    icon: TrendingUp,
    title: "Relatórios e alertas automáticos",
    description: "Acompanhe seu faturamento com insights em tempo real",
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Tudo que você precisa</h2>
          <p className="text-lg text-foreground/70 text-balance max-w-2xl mx-auto">
            Recursos poderosos para automatizar sua gestão fiscal e focar no que realmente importa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mt-4 mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
