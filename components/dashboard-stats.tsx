"use client"

import { motion } from "framer-motion"
import { FileText, DollarSign, Clock } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const chartData = [
  { week: "Sem 1", notas: 2 },
  { week: "Sem 2", notas: 5 },
  { week: "Sem 3", notas: 3 },
  { week: "Sem 4", notas: 8 },
  { week: "Sem 5", notas: 7 },
]

export function DashboardStats() {
  const stats = [
    {
      icon: FileText,
      label: "Notas geradas este mês",
      value: "12",
      color: "from-blue-50 to-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      icon: DollarSign,
      label: "Receita total",
      value: "R$ 3.480,00",
      color: "from-green-50 to-green-100",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      icon: Clock,
      label: "Tempo economizado com IA",
      value: "6h 40min",
      color: "from-purple-50 to-purple-100",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
  ]

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
    <div className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${stat.color} border ${stat.borderColor} rounded-xl p-4 md:p-6`}
            >
              <div className="flex items-start justify-between">
                <div className="min-w-0">
                  <p className="text-xs md:text-sm font-medium text-gray-600 mb-2">{stat.label}</p>
                  <p className={`text-2xl md:text-3xl font-bold ${stat.textColor} truncate`}>{stat.value}</p>
                </div>
                <div className={`p-2 md:p-3 bg-white rounded-lg ${stat.textColor} flex-shrink-0 ml-2`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 overflow-hidden"
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Notas geradas por semana</h3>
        <div className="w-full h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="week" stroke="#6b7280" style={{ fontSize: "12px" }} />
              <YAxis stroke="#6b7280" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="notas" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  )
}
