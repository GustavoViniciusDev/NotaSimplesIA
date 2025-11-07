"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    description: "Perfeito para começar",
    features: ["Até 5 notas/mês", "IA para geração de notas", "Suporte por email", "Dashboard básico"],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 39,90",
    period: "/mês",
    description: "Para freelancers",
    features: [
      "Emissão automática de notas e recibos (via IA)",
      "Preenchimento fiscal inteligente",
      "Histórico completo de emissões",
      "Relatórios simples de faturamento",
      "Geração de comprovantes e recibos em PDF",
      "Organização por cliente e serviço",
      "Exportação de dados (CSV / PDF)",
    ],
    cta: "Começar grátis",
    highlighted: true,
  },
  {
    name: "Business",
    price: "R$ 129,90",
    period: "/mês",
    description: "Para empresas",
    features: [
      "Tudo do plano Pro",
      "Painel com visão mensal consolidada",
      "Emissão em lote (várias notas de uma vez)",
      "Relatórios detalhados de clientes e serviços",
      "Faturamento e acompanhamento por centro de custo",
      "Prioridade na liberação de novas integrações",
    ],
    cta: "Começar grátis",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Planos simples e transparentes
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Escolha o plano perfeito para seu negócio. Cancele a qualquer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 ${plan.highlighted ? "md:scale-105" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl blur-xl" />
              )}

              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary shadow-xl"
                    : "bg-card border border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    Mais popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-foreground/70 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-foreground/60 ml-1">{plan.period}</span>}
                </div>

                <Button
                  asChild
                  size="lg"
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:scale-[1.02] transition-transform"
                      : "bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/20"
                  }`}
                >
                  <Link href="#">{plan.cta}</Link>
                </Button>


                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-2">Precisa de algo customizado?</p>
          <Link href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors">
            Entre em contato com nossa equipe →
          </Link>
        </div>
      </div>
    </section>
  )
}
