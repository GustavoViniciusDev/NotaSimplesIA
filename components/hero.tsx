"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-secondary/60 text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Automatize sua gestão fiscal
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                Gere notas e recibos com IA em segundos
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 text-balance leading-relaxed">
                O jeito inteligente e automático de cuidar da parte chata do seu trabalho. Deixe a IA fazer o trabalho
                pesado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Link href="#" className="flex items-center gap-2">
                  Comece grátis agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Ver demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Leva 30 segundos
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative w-full bg-gradient-to-br from-secondary/60 to-secondary/30 rounded-3xl p-6 border border-secondary/40 shadow-2xl">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-2 bg-primary/30 rounded" />
                    <div className="h-2 bg-primary/40 rounded col-span-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-primary/20 rounded w-3/4" />
                    <div className="h-3 bg-primary/25 rounded w-full" />
                    <div className="h-3 bg-primary/20 rounded w-5/6" />
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                    <div className="h-2 bg-primary/30 rounded w-1/2" />
                    <div className="h-2 bg-primary/20 rounded w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
