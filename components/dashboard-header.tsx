"use client";

import { Bell, Plus, Menu, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function DashboardHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="border-b border-border bg-card sticky top-0 z-20 transition-colors duration-300">
      <div className="px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuClick}
            className="lg:hidden p-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </motion.button>

          <div className="min-w-0">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              Dashboard
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              Bem-vindo, Plano Pro Ativo
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </motion.button>

          {mounted && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-3 md:px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Nova Nota com IA</span>
            <span className="sm:hidden">Nova</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
