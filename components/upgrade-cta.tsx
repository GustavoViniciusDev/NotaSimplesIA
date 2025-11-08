"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function UpgradeCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center"
    >
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        Você está próximo do limite do seu plano gratuito
      </h3>
      <p className="text-sm md:text-base text-muted-foreground mb-6">
        Atualize para o plano Pro e gere notas ilimitadas com IA avançada,
        automações e muito mais.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
      >
        Fazer upgrade
        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
      </motion.button>
    </motion.div>
  );
}
