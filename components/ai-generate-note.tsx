"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Download, Copy } from "lucide-react"

export function AIGenerateNote() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)

  const handleGenerate = () => {
    if (!input.trim()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 3000)
  }

  const generatedNote = {
    client: "Cliente XYZ",
    description: input || "Fiz um site para um cliente de e-commerce, valor R$1.500.",
    value: "R$ 1.500,00",
    date: new Date().toLocaleDateString("pt-BR"),
    id: "NOTA-2024-001",
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 lg:p-8"
      >
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">
            Descreva o serviço e deixe a IA cuidar do resto
          </h2>
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fiz um site para um cliente de e-commerce, valor R$1.500."
          className="w-full border border-gray-300 rounded-lg p-3 md:p-4 text-sm md:text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-28 md:h-32 font-medium"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGenerate}
          disabled={loading || !input.trim()}
          className="mt-4 md:mt-6 w-full bg-blue-600 text-white py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
        >
          {loading ? (
            <>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
              <span className="hidden sm:inline">Gerando nota fiscal com IA...</span>
              <span className="sm:hidden">Gerando...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="hidden sm:inline">Gerar nota automaticamente com IA</span>
              <span className="sm:hidden">Gerar nota</span>
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Generated Note Preview */}
      <AnimatePresence>
        {generated && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 md:p-6 lg:p-8"
          >
            <div className="flex items-start justify-between mb-4 md:mb-6 gap-4">
              <div className="min-w-0">
                <p className="text-xs md:text-sm font-semibold text-green-600 mb-2">Nota gerada com sucesso!</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 truncate">{generatedNote.id}</p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white text-lg md:text-xl">✓</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="min-w-0">
                <p className="text-xs text-gray-600 mb-1">Cliente</p>
                <p className="font-semibold text-gray-900 text-sm truncate">{generatedNote.client}</p>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-600 mb-1">Data</p>
                <p className="font-semibold text-gray-900 text-sm truncate">{generatedNote.date}</p>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-600 mb-1">Valor</p>
                <p className="font-bold text-green-600 text-sm">{generatedNote.value}</p>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-600 mb-1">Status</p>
                <p className="font-semibold text-green-600 text-sm">✓ Pronto</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 md:p-4 mb-4 md:mb-6 border border-green-200">
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-2">Descrição do Serviço</p>
              <p className="text-sm md:text-base text-gray-900 font-medium break-words">{generatedNote.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-green-600 text-white py-2 md:py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Baixar PDF</span>
                <span className="sm:hidden">Baixar</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-white text-green-600 py-2 md:py-2.5 rounded-lg font-semibold border border-green-200 hover:bg-green-50 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Copy className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Copiar</span>
                <span className="sm:hidden">Copy</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
