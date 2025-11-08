"use client"

import { motion } from "framer-motion"
import { Eye, Download, Edit, Trash2, AlertCircle, Clock, CheckCircle } from "lucide-react"

const recentNotes = [
  {
    id: "#1245",
    client: "João Silva",
    value: "R$ 320,00",
    date: "04/11/2025",
    status: "completed",
    statusLabel: "Emitida",
  },
  {
    id: "#1244",
    client: "Agência Brisa",
    value: "R$ 890,00",
    date: "02/11/2025",
    status: "pending",
    statusLabel: "Pendente",
  },
  {
    id: "#1243",
    client: "Mariana Costa",
    value: "R$ 450,00",
    date: "28/10/2025",
    status: "failed",
    statusLabel: "Falha",
  },
  {
    id: "#1242",
    client: "Tech Solutions",
    value: "R$ 2.100,00",
    date: "25/10/2025",
    status: "completed",
    statusLabel: "Emitida",
  },
]

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50 dark:bg-emerald-950" },
  pending: { icon: Clock, color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950" },
  failed: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50 dark:bg-red-950" },
}

export function RecentNotesTable() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-card border border-border rounded-2xl overflow-hidden"
    >
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Últimas notas fiscais</h3>
      </div>

      <div className="overflow-x-auto">
        <motion.table variants={containerVariants} initial="hidden" animate="visible" className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">Nº</th>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Cliente
              </th>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Valor
              </th>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Data
              </th>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Status
              </th>
              <th className="px-4 md:px-6 py-3 text-right font-semibold text-muted-foreground text-xs md:text-sm">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {recentNotes.map((note, index) => {
              const statusInfo = statusConfig[note.status as keyof typeof statusConfig]
              const StatusIcon = statusInfo.icon
              return (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="px-4 md:px-6 py-4 font-semibold text-foreground">{note.id}</td>
                  <td className="px-4 md:px-6 py-4 text-foreground">{note.client}</td>
                  <td className="px-4 md:px-6 py-4 font-semibold text-foreground">{note.value}</td>
                  <td className="px-4 md:px-6 py-4 text-muted-foreground">{note.date}</td>
                  <td className="px-4 md:px-6 py-4">
                    <div className={`flex items-center gap-2 w-fit px-2.5 py-1.5 rounded-lg ${statusInfo.bg}`}>
                      <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                      <span className={`text-xs font-medium ${statusInfo.color}`}>{note.statusLabel}</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 text-muted-foreground hover:bg-secondary rounded transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 text-muted-foreground hover:bg-secondary rounded transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 text-muted-foreground hover:bg-secondary rounded transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              )
            })}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  )
}
