"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Edit2, Check, X } from "lucide-react"
import type { InvoiceData } from "@/lib/invoice-mock-data" 

interface InvoicePreviewEditorProps {
  invoice: InvoiceData
  onConfirm: (invoice: InvoiceData) => void
  onCancel: () => void
}

export function InvoicePreviewEditor({ invoice, onConfirm, onCancel }: InvoicePreviewEditorProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedInvoice, setEditedInvoice] = useState(invoice)

  const handleFieldChange = (section: string, field: string, value: string | number) => {
    setEditedInvoice((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section as keyof InvoiceData] as any),
        [field]: value,
      },
    }))
  }

  const handleServiceChange = (field: string, value: string) => {
    setEditedInvoice((prev) => ({
      ...prev,
      service: {
        ...prev.service,
        [field]: value,
      },
    }))
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="bg-card border border-border rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">NFS-e Gerada</p>
          <p className="text-2xl font-bold text-foreground">{editedInvoice.invoice_number}</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
        >
          <Edit2 className="w-4 h-4" />
          {isEditing ? "Visualizar" : "Editar"}
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Descrição do Serviço */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-3">Serviço</h3>
          {isEditing ? (
            <textarea
              value={editedInvoice.service.description}
              onChange={(e) => handleServiceChange("description", e.target.value)}
              className="w-full h-24 p-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          ) : (
            <p className="text-foreground bg-background p-4 rounded-lg border border-border">
              {editedInvoice.service.description}
            </p>
          )}
        </section>

        {/* Valores */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-3">Valores</h3>
          <div className="space-y-3 bg-background p-4 rounded-lg border border-border">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Valor Bruto:</span>
              {isEditing ? (
                <input
                  type="number"
                  value={editedInvoice.values.amount_gross}
                  onChange={(e) => {
                    const value = Number.parseFloat(e.target.value)
                    setEditedInvoice((prev) => ({
                      ...prev,
                      values: {
                        ...prev.values,
                        amount_gross: value,
                        base_calculation: value,
                        iss_value: value * 0.05,
                        taxes_total: value * 0.05,
                        amount_net: value - value * 0.05,
                      },
                    }))
                  }}
                  className="w-32 p-2 border border-border rounded bg-card text-foreground text-sm"
                  step="0.01"
                />
              ) : (
                <span className="font-semibold text-foreground">
                  {formatCurrency(editedInvoice.values.amount_gross)}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">ISS (5%):</span>
              <span className="font-semibold text-foreground">{formatCurrency(editedInvoice.values.iss_value)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-border">
              <span className="text-foreground font-bold">Valor Líquido:</span>
              <span className="font-bold text-lg text-primary">{formatCurrency(editedInvoice.values.amount_net)}</span>
            </div>
          </div>
        </section>

        {/* Dados do Cliente */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-3">Cliente</h3>
          <div className="space-y-3 bg-background p-4 rounded-lg border border-border text-sm">
            <div>
              <p className="text-muted-foreground text-xs">Nome</p>
              {isEditing ? (
                <input
                  type="text"
                  value={editedInvoice.client.name}
                  onChange={(e) => handleFieldChange("client", "name", e.target.value)}
                  className="w-full p-2 border border-border rounded bg-card text-foreground mt-1"
                />
              ) : (
                <p className="text-foreground font-medium">{editedInvoice.client.name}</p>
              )}
            </div>
            <div>
              <p className="text-muted-foreground text-xs">CNPJ</p>
              <p className="text-foreground font-medium">{editedInvoice.client.cpf_cnpj}</p>
            </div>
          </div>
        </section>

        {/* Pagamento */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-3">Pagamento</h3>
          <div className="space-y-3 bg-background p-4 rounded-lg border border-border text-sm">
            <div>
              <p className="text-muted-foreground text-xs">Método</p>
              <p className="text-foreground font-medium capitalize">{editedInvoice.payment.payment_method}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Vencimento</p>
              <p className="text-foreground font-medium">
                {new Date(editedInvoice.payment.due_date).toLocaleDateString("pt-BR")}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Status</p>
              <p className="text-foreground font-medium capitalize text-yellow-600 dark:text-yellow-500">
                {editedInvoice.payment.payment_status}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Actions */}
      <div className="bg-background border-t border-border p-6 flex gap-3 justify-end">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors text-sm font-medium"
        >
          <X className="w-4 h-4" />
          Descartar
        </button>
        <button
          onClick={() => {
            onConfirm(editedInvoice)
            setIsEditing(false)
          }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
        >
          <Check className="w-4 h-4" />
          Confirmar
        </button>
      </div>
    </motion.div>
  )
}
