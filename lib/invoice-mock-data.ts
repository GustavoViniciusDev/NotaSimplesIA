export interface InvoiceData {
  invoice_number: string
  series: string
  issue_date: string
  status: "emitida" | "pendente" | "cancelada" | "erro"
  protocol_number: string
  validation_url: string
  provider: {
    name: string
    type: "PF" | "PJ"
    cpf_cnpj: string
    municipal_registration: string
    address: string
    email: string
    phone: string
  }
  client: {
    name: string
    cpf_cnpj: string
    address: string
    email: string
    phone?: string
  }
  service: {
    description: string
    service_code: string
    cnae: string
    service_date: string
    period_start: string
    period_end: string
  }
  values: {
    amount_gross: number
    discount: number
    base_calculation: number
    iss_rate: number
    iss_value: number
    other_taxes: Array<{
      code: string
      rate: number
      value: number
    }>
    taxes_total: number
    amount_net: number
  }
  payment: {
    payment_method: "pix" | "boleto" | "cartao" | "transferencia"
    due_date: string
    payment_status: "pago" | "pendente" | "atrasado"
    payment_link: string
  }
  observations: string
  attachments: string[]
  pdf_url: string
  created_at: string
  updated_at: string
}

export const generateMockInvoice = (description: string, amount: number): InvoiceData => {
  const now = new Date()
  const invoiceNumber = String(Math.floor(Math.random() * 9000) + 1000)
  const issValue = amount * 0.05
  const netAmount = amount - issValue

  return {
    invoice_number: invoiceNumber,
    series: "A",
    issue_date: now.toISOString(),
    status: "emitida",
    protocol_number: `NFS-e-${now.getFullYear()}-${String(invoiceNumber).padStart(6, "0")}`,
    validation_url: `https://notasimples.app/validate/${invoiceNumber}`,
    provider: {
      name: "Gustavo Vinicius",
      type: "PF",
      cpf_cnpj: "000.000.000-00",
      municipal_registration: "123456",
      address: "Rua do Exemplo, 123, Sala 1, Centro, São Paulo, SP, 01000-000",
      email: "gustavo@example.com",
      phone: "+55 11 91234-5678",
    },
    client: {
      name: "Agência Brisa Ltda",
      cpf_cnpj: "12.345.678/0001-90",
      address: "Av. Cliente, 500, Conj. 10, Rio de Janeiro, RJ, 20000-000",
      email: "financeiro@agenciabrisa.com",
    },
    service: {
      description,
      service_code: "14.01",
      cnae: "7410-2/01",
      service_date: now.toISOString().split("T")[0],
      period_start: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      period_end: now.toISOString().split("T")[0],
    },
    values: {
      amount_gross: amount,
      discount: 0,
      base_calculation: amount,
      iss_rate: 0.05,
      iss_value: issValue,
      other_taxes: [
        { code: "INSS_retido", rate: 0, value: 0 },
        { code: "IRRF", rate: 0, value: 0 },
      ],
      taxes_total: issValue,
      amount_net: netAmount,
    },
    payment: {
      payment_method: "pix",
      due_date: now.toISOString().split("T")[0],
      payment_status: "pendente",
      payment_link: "https://pagamento.mock/checkout/abc123",
    },
    observations: "Serviço concluído conforme solicitado.",
    attachments: [],
    pdf_url: `https://notasimples.app/mock-pdfs/nf-${invoiceNumber}.pdf`,
    created_at: now.toISOString(),
    updated_at: now.toISOString(),
  }
}
