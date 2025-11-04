"use client"

import { motion } from "framer-motion"
import { TrendingUp, Wallet, CheckCircle, Users } from "lucide-react"

const reports = [
  {
    icon: Users,
    title: "Top cliente do mês",
    value: "João Silva",
    subtitle: "3 notas geradas",
    color: "from-orange-50 to-orange-100",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
  },
  {
    icon: Wallet,
    title: "Total recebido via PIX",
    value: "R$ 2.100,00",
    subtitle: "5 transações",
    color: "from-indigo-50 to-indigo-100",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    icon: CheckCircle,
    title: "Percentual de notas pagas",
    value: "92%",
    subtitle: "11 de 12 notas",
    color: "from-cyan-50 to-cyan-100",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-200",
  },
  {
    icon: TrendingUp,
    title: "Crescimento este mês",
    value: "+45%",
    subtitle: "vs. mês anterior",
    color: "from-pink-50 to-pink-100",
    textColor: "text-pink-600",
    borderColor: "border-pink-200",
  },
]

export function ReportsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}>
      <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Seus Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {reports.map((report, index) => {
          const Icon = report.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${report.color} border ${report.borderColor} rounded-xl p-4 md:p-6 group cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <div
                className={`p-2 md:p-3 bg-white rounded-lg ${report.textColor} w-fit mb-3 md:mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">{report.title}</p>
              <p className={`text-xl md:text-2xl font-bold ${report.textColor} mb-1 break-words`}>{report.value}</p>
              <p className="text-xs text-gray-500">{report.subtitle}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
