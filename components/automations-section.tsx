"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Zap } from "lucide-react";

const automations = [
  {
    name: "Enviar recibo automático",
    status: "active",
    nextExecution: "05/11/2025",
  },
  {
    name: "Cobrança recorrente – Cliente Brisa",
    status: "active",
    nextExecution: "10/11/2025",
  },
  {
    name: "Geração mensal de nota 'Mentoria'",
    status: "preparing",
    nextExecution: "01/12/2025",
  },
];

const statusConfig = {
  active: {
    icon: CheckCircle,
    label: "Ativo",
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-950",
  },
  preparing: {
    icon: Zap,
    label: "Em preparo",
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-950",
  },
};

export function AutomationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-card border border-border rounded-2xl overflow-hidden"
    >
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          Automações Ativas
        </h3>
      </div>

      <div className="overflow-x-auto">
        <motion.table
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-sm"
        >
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Automação
              </th>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Status
              </th>
              <th className="px-4 md:px-6 py-3 text-left font-semibold text-muted-foreground text-xs md:text-sm">
                Próxima Execução
              </th>
            </tr>
          </thead>
          <tbody>
            {automations.map((automation, index) => {
              const statusInfo =
                statusConfig[automation.status as keyof typeof statusConfig];
              const StatusIcon = statusInfo.icon;
              return (
                <motion.tr
                  key={index}
                  variants={rowVariants}
                  className="border-b border-border hover:bg-muted/50"
                >
                  <td className="px-4 md:px-6 py-4 font-medium text-foreground">
                    {automation.name}
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div
                      className={`flex items-center gap-2 w-fit px-2.5 py-1.5 rounded-lg ${statusInfo.bg}`}
                    >
                      <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                      <span
                        className={`text-xs font-medium ${statusInfo.color}`}
                      >
                        {statusInfo.label}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    {automation.nextExecution}
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
}
