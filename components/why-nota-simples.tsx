"use client"

import { Clock, CheckCircle2, Lock } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Menos tempo",
    description: "Automatize tarefas repetitivas e foque no que importa",
  },
  {
    icon: CheckCircle2,
    title: "Menos erros",
    description: "IA verifica dados e cálculos automaticamente",
  },
  {
    icon: Lock,
    title: "Mais controle",
    description: "Revise e customize cada documento antes de enviar",
  },
]

export default function WhyNotaSimples() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Por que escolher o NotaSimples IA
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            Economize tempo, evite erros e tenha controle total das suas emissões.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl" />
                <div className="relative p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
