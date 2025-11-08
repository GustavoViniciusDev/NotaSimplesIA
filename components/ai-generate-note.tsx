"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Download, Send, FileText } from "lucide-react"
import { generateMockInvoice } from "@/lib/invoice-mock-data"
import { InvoicePreviewEditor } from "@/components/invoice-preview-editor"
import type { InvoiceData } from "@/lib/invoice-mock-data"

type Step = "input" | "generating" | "preview" | "confirmed"

export function AIGenerateNote() {
  const [step, setStep] = useState<Step>("input")
  const [input, setInput] = useState("")
  const [amount, setAmount] = useState("")
  const [generatedInvoice, setGeneratedInvoice] = useState<InvoiceData | null>(null)
  const [confirmedInvoice, setConfirmedInvoice] = useState<InvoiceData | null>(null)

  const handleGenerate = () => {
    if (!input.trim() || !amount) return

    setStep("generating")
    setTimeout(() => {
      const invoice = generateMockInvoice(input, Number.parseFloat(amount))
      setGeneratedInvoice(invoice)
      setStep("preview")
    }, 3000)
  }

  const handleConfirm = (invoice: InvoiceData) => {
    setConfirmedInvoice(invoice)
    setStep("confirmed")
  }

  const handleReset = () => {
    setStep("input")
    setInput("")
    setAmount("")
    setGeneratedInvoice(null)
    setConfirmedInvoice(null)
  }

  return (
    <div className="space-y-6">
      <AnimatePresence mode="wait">
        {/* STEP 1: Input */}
        {step === "input" && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-card border border-border rounded-2xl p-4 md:p-6 lg:p-8"
          >
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <h2 className="text-lg md:text-2xl font-bold text-foreground">
                Descreva o serviço e deixe a IA cuidar do resto
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Descrição do Serviço</label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Fiz um site para um cliente de e-commerce, valor R$1.500."
                  className="w-full border border-border rounded-lg p-3 md:p-4 text-sm md:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none h-28 md:h-32 font-medium bg-background transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Valor do Serviço (R$)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="1500.00"
                  className="w-full border border-border rounded-lg p-3 md:p-4 text-sm md:text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background transition-colors duration-300"
                  step="0.01"
                  min="0"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={!input.trim() || !amount}
                className="w-full bg-primary text-primary-foreground py-2.5 md:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Gerar nota automaticamente com IA</span>
                <span className="sm:hidden">Gerar nota</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Generating */}
        {step === "generating" && (
          <motion.div
            key="generating"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="mb-4"
            >
              <Sparkles className="w-12 h-12 text-primary" />
            </motion.div>
            <p className="text-lg font-semibold text-foreground">Gerando nota fiscal com IA...</p>
            <p className="text-sm text-muted-foreground mt-2">Aguarde alguns segundos</p>
          </motion.div>
        )}

        {/* STEP 3: Preview & Edit */}
        {step === "preview" && generatedInvoice && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <InvoicePreviewEditor
              invoice={generatedInvoice}
              onConfirm={handleConfirm}
              onCancel={() => setStep("input")}
            />
          </motion.div>
        )}

        {/* STEP 4: Confirmed */}
        {step === "confirmed" && confirmedInvoice && (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-card border border-border rounded-2xl p-4 md:p-6 lg:p-8"
          >
            <div className="flex items-start justify-between mb-6 gap-4">
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  Nota Fiscal Emitida com Sucesso!
                </p>
                <p className="text-xl md:text-2xl font-bold text-foreground truncate">
                  {confirmedInvoice.invoice_number}
                </p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-lg md:text-xl">✓</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Cliente</p>
                <p className="font-semibold text-foreground text-sm truncate">{confirmedInvoice.client.name}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Data</p>
                <p className="font-semibold text-foreground text-sm">
                  {new Date(confirmedInvoice.issue_date).toLocaleDateString("pt-BR")}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Valor Líquido</p>
                <p className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                  R$ {confirmedInvoice.values.amount_net.toFixed(2).replace(".", ",")}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Status</p>
                <p className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm">✓ Emitida</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-emerald-600 dark:bg-emerald-500 text-white py-2 md:py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Baixar PDF</span>
                <span className="sm:hidden">Baixar</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-primary text-primary-foreground py-2 md:py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Enviar para Cliente</span>
                <span className="sm:hidden">Enviar</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="flex-1 bg-background text-foreground py-2 md:py-2.5 rounded-lg font-semibold border border-border hover:bg-secondary transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Nova Nota</span>
                <span className="sm:hidden">Nova</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
