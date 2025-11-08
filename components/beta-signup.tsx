"use client"

import { useState } from "react"
import { useGoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, User, Briefcase, CheckCircle } from "lucide-react"

export default function BetaSignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "", profession: "" })
  const [submitted, setSubmitted] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!executeRecaptcha) return alert("reCAPTCHA não carregou ainda")

    const token = await executeRecaptcha("waitlist_signup")
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, recaptchaToken: token }),
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: "", email: "", profession: "" })
    } else {
      console.error("Erro ao enviar dados")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: index * 0.1 },
    }),
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Participe do teste beta do NotaSimples IA
          </h2>
          <p className="text-lg text-foreground/70">
            Estamos criando uma IA que gera notas e recibos automaticamente — e queremos seu feedback. Cadastre-se para testar antes do lançamento.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm"
        >
          {submitted ? (
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
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Você entrou na lista de espera!</h3>
              <p className="text-foreground/70">
                🎉 Te avisaremos no lançamento. Obrigado por acreditar no NotaSimples!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo nome */}
              <motion.div custom={0} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-sm font-semibold text-foreground mb-2">Nome</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-primary/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    placeholder="Seu nome"
                  />
                </div>
              </motion.div>

              {/* Campo e-mail */}
              <motion.div custom={1} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-sm font-semibold text-foreground mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-primary/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    placeholder="seu@email.com"
                  />
                </div>
              </motion.div>

              {/* Campo profissão */}
              <motion.div custom={2} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block text-sm font-semibold text-foreground mb-2">Profissão</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60" />
                  <select
                    required
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-primary/20 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  >
                    <option value="">Selecione sua profissão</option>
                    <option value="designer">Designer</option>
                    <option value="redator">Redator</option>
                    <option value="dev">Dev</option>
                    <option value="consultor">Consultor</option>
                    <option value="fotografo">Fotógrafo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </motion.div>

              {/* Botão */}
              <motion.div custom={3} variants={inputVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all">
                  Entrar na lista de espera
                </Button>
              </motion.div>

              <p className="text-center text-sm text-foreground/60">
                Sem spam, sem cartão necessário. Apenas atualizações do lançamento.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

