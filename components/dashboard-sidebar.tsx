"use client";

import { useState } from "react";
import { Home, FileText, Sparkles, BarChart3, Settings, X } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "#" },
  { icon: FileText, label: "Minhas Notas", href: "#" },
  { icon: Sparkles, label: "Gerar com IA", href: "#" },
  { icon: BarChart3, label: "Relatórios", href: "#" },
  { icon: Settings, label: "Configurações", href: "#" },
];

export function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`
        ${sidebarOpen ? "fixed" : "hidden"} lg:static
        w-64 border-r border-border bg-card flex flex-col
        h-screen z-40 lg:z-0
        transition-all duration-300
      `}
      >
        {/* Logo */}
        <div className="p-4 md:p-6 border-b border-border">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h1 className="font-bold text-lg text-foreground">
                  NotaSimples
                </h1>
                <p className="text-xs text-muted-foreground">IA</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-secondary rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-3 md:p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setActiveItem(index);
                setSidebarOpen(false);
              }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeItem === index
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm truncate">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Upgrade Section */}
        <div className="p-3 md:p-4 border-t border-border space-y-3">
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-2">
              Upgrade para Pro
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Desbloqueie geração ilimitada
            </p>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Ver Planos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
