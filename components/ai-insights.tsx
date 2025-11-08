"use client";

import { motion } from "framer-motion";
import { Lightbulb, Bell, Brain } from "lucide-react";

const insights = [
  {
    icon: Lightbulb,
    text: "Você emitiu 20% mais notas neste mês comparado a outubro.",
  },
  {
    icon: Bell,
    text: "3 clientes ainda não pagaram — quer que eu envie lembretes automáticos?",
  },
  {
    icon: Brain,
    text: "Sugestão: crie um modelo de nota para serviços recorrentes.",
  },
];

export function AIInsights() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.5 }}
      className="bg-primary/5 border border-primary/20 rounded-2xl p-4 md:p-6 lg:p-8"
    >
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-2">
        <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        Insights da IA
      </h3>
      <div className="space-y-3 md:space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-3 md:gap-4"
            >
              <div className="p-2 md:p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0 h-fit">
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {insight.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
