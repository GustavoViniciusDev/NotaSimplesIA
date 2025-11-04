"use client"

import { useState } from "react"
import { Home, FileText, Sparkles, BarChart3, Settings, X } from "lucide-react"
import { motion } from "framer-motion"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "#" },
  { icon: FileText, label: "Minhas Notas", href: "#" },
  { icon: Sparkles, label: "Gerar com IA", href: "#" },
  { icon: BarChart3, label: "Relatórios", href: "#" },
  { icon: Settings, label: "Configurações", href: "#" },
]

export function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={`
        ${sidebarOpen ? "fixed" : "hidden"} lg:static
        w-64 border-r border-gray-200 bg-white flex flex-col
        h-screen z-40 lg:z-0
        transition-all duration-300
      `}
      >
        {/* Logo */}
        <div className="p-4 md:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="font-bold text-lg text-gray-900">NotaSimples</h1>
                <p className="text-xs text-gray-500">IA</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 hover:bg-gray-100 rounded">
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
                setActiveItem(index)
                setSidebarOpen(false)
              }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeItem === index
                  ? "bg-blue-50 text-blue-600 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm truncate">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Upgrade Section */}
        <div className="p-3 md:p-4 border-t border-gray-200 space-y-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
            <p className="text-sm font-semibold text-gray-900 mb-2">Upgrade para Pro</p>
            <p className="text-xs text-gray-600 mb-3">Desbloqueie geração ilimitada</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors">
              Ver Planos
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
