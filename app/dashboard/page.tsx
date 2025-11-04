"use client"
import { DashboardLayout } from "@/components/dashboard-layout"
import { DashboardStats } from "@/components/dashboard-stats"
import { AIGenerateNote } from "@/components/ai-generate-note"
import { ReportsSection } from "@/components/reports-section"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardStats />
        <AIGenerateNote />
        <ReportsSection />
      </div>
    </DashboardLayout>
  )
}
