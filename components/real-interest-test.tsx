"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CreditCard, CheckCircle, Info } from "lucide-react"

export default function RealInterestTest() {
  const [showCheckout, setShowCheckout] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "" })

  const handlePreSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowCheckout(false)
      setFormData({ name: "", email: "" })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Quer garantir o acesso antecipado?
          </h2>
          <p className="text-lg text-foreground/70">
            Liberamos inscrições antecipadas para o plano Pro a{" "}
            <span className="font-semibold text-primary">R$ 9,90</span> — apenas para validar o interesse real de
            pagamento.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card rounded-2xl shadow-lg p-8 md:p-10 border border-border"
        >
          {showCheckout ? (
            submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                  className="mb-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Uau! Você confirmou interesse real!</h3>
                <p className="text-foreground/70">
                  💰 Você confirmou interesse no plano Pro. Obrigado por apoiar o projeto!
                </p>
              </motion.div>
            ) : (
              <motion.form onSubmit={handlePreSubscribe} className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3 mb-6">
                  <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">Essa é apenas uma simulação, sem cobrança real.</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Nome completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground/70">Plano Pro</p>
                    <p className="text-2xl font-bold text-foreground">R$ 9,90</p>
                    <p className="text-xs text-foreground/60">acesso antecipado especial</p>
                  </div>
                  <CreditCard className="w-10 h-10 text-primary/40" />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Pré-inscrever no Pro por R$ 9,90
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  onClick={() => setShowCheckout(false)}
                  className="w-full"
                >
                  Voltar para lista de espera
                </Button>
              </motion.form>
            )
          ) : (
            <motion.div className="text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Teste seu interesse real</h3>
                <p className="text-foreground/70">
                  Confirm que você teria interesse em pagar pelo NotaSimples. Isso nos ajuda a validar se a ideia é
                  viável.
                </p>
              </div>

              <motion.div
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-2xl font-bold text-foreground mb-1">R$ 9,90</p>
                <p className="text-sm text-foreground/70">Acesso antecipado — 80% de desconto</p>
              </motion.div>

              <Button
                size="lg"
                onClick={() => setShowCheckout(true)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Confirmar interesse real
              </Button>

              <p className="text-sm text-foreground/60">Sem compromisso. Cancelável a qualquer momento.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
