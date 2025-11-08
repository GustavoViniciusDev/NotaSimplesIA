"use client";

import { motion } from "framer-motion";
import { FileText, Wallet, Zap, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", value: 8 },
  { month: "Fev", value: 12 },
  { month: "Mar", value: 19 },
  { month: "Abr", value: 11 },
  { month: "Mai", value: 14 },
  { month: "Jun", value: 9 },
  { month: "Jul", value: 22 },
  { month: "Ago", value: 15 },
  { month: "Set", value: 13 },
  { month: "Out", value: 25 },
  { month: "Nov", value: 18 },
  { month: "Dez", value: 23 },
];

export function DashboardStats() {
  const stats = [
    {
      icon: FileText,
      label: "Notas emitidas",
      value: "23 neste mês",
      description: "Total de notas fiscais geradas",
    },
    {
      icon: Wallet,
      label: "Valor total",
      value: "R$ 8.450,00",
      description: "Soma de todas as notas do mês",
    },
    {
      icon: Zap,
      label: "Ações automáticas",
      value: "15 automatizações ativas",
      description: "Cobranças e lembretes automáticos",
    },
    {
      icon: Clock,
      label: "Economia de tempo",
      value: "7h poupadas",
      description: "Estimativa de tempo economizado pela IA",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -4 }}
              className="bg-card border border-border rounded-2xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">
                    {stat.label}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-foreground truncate">
                    {stat.value}
                  </p>
                </div>
                <div className="p-2 md:p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-2xl p-4 md:p-6 overflow-hidden"
      >
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">
          Evolução das emissões
        </h3>
        <div className="w-full h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis
                dataKey="month"
                stroke="var(--color-muted-foreground)"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                stroke="var(--color-muted-foreground)"
                style={{ fontSize: "12px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  color: "var(--color-foreground)",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-primary)"
                strokeWidth={2}
                dot={{ fill: "var(--color-primary)", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
