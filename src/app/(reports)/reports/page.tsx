"use client"

import { FileDown } from 'lucide-react'
import * as React from "react"

import { Button } from "@/shared/ui/button"
// import { RootLayout } from "../Layout"
import { ReportFilters } from "./components/reports-filter"
import { ReportTable } from "./components/report-table"

export default function ReportPage() {
  const [showReport, setShowReport] = React.useState(false)

  const handleGenerateReport = (filters: string[]) => {
    setShowReport(true)
  }

  const handleExportToExcel = () => {
    // Implementation for Excel export would go here
    console.log("Exporting to Excel...")
  }

  return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Генерация отчетов</h1>
        <ReportFilters onGenerate={handleGenerateReport} />
        {showReport && (
          <>
            <ReportTable />
            <Button
              variant="default"
              className="bg-[#1e56aa] hover:bg-[#1e56aa]/90"
              onClick={handleExportToExcel}
            >
              <FileDown className="mr-2 h-4 w-4" />
              Экспорт в Excel
            </Button>
          </>
        )}
      </div>
  )
}

