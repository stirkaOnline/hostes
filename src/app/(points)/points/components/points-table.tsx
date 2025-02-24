"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { Pencil, Trash2, Download } from "lucide-react"
import { PointDialog } from "./point-dialog"

interface Point {
  id: number
  legalName: string
  interiorType: string
  phone: string
  address: string
}

export function PointsTable() {
  const [points, setPoints] = useState<Point[]>([
    {
      id: 1,
      legalName: "ООО 'Ромашка'",
      interiorType: "Собственная сеть",
      phone: "+7 (999) 999-99-99",
      address: "город Красноярск, ул. Космонавтов, 10",
    },
    {
      id: 2,
      legalName: "ООО 'Лютик'",
      interiorType: "Франчайзи",
      phone: "+7 (999) 999-99-99",
      address: "город Пушкин, наб. 1905 года, 5а",
    },
    {
      id: 3,
      legalName: "ООО 'Лютик'",
      interiorType: "Франчайзи",
      phone: "+7 (999) 999-99-99",
      address: "город Серебряный Прудъ, въезд Косачей, 82",
    },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPoint, setEditingPoint] = useState<Point | null>(null)

  const handleSave = (point: Partial<Point>) => {
    if (editingPoint) {
      setPoints(points.map((p) => (p.id === editingPoint.id ? { ...p, ...point } : p)))
    } else {
      setPoints([
        ...points,
        {
          id: points.length + 1,
          legalName: point.legalName || "",
          interiorType: point.interiorType || "",
          phone: point.phone || "",
          address: point.address || "",
        },
      ])
    }
    setIsDialogOpen(false)
    setEditingPoint(null)
  }

  const handleDelete = (id: number) => {
    setPoints(points.filter((p) => p.id !== id))
  }

  const handleExportToExcel = () => {
    // Implementation for Excel export would go here
    console.log("Exporting to Excel...")
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <Button onClick={() => setIsDialogOpen(true)} className="bg-[#2196F3] hover:bg-[#1976D2]">
            Добавить
          </Button>
          <Button
            variant="secondary"
            onClick={handleExportToExcel}
            className="bg-[#9C27B0] text-white hover:bg-[#7B1FA2]"
          >
            <Download className="mr-2 h-4 w-4" />
            Экспорт в Excel
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Юр. название</TableHead>
            <TableHead>Тип интерьера</TableHead>
            <TableHead>Номер телефона</TableHead>
            <TableHead>Юр. адрес</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {points.map((point) => (
            <TableRow key={point.id}>
              <TableCell>{point.id}</TableCell>
              <TableCell>{point.legalName}</TableCell>
              <TableCell>{point.interiorType}</TableCell>
              <TableCell>{point.phone}</TableCell>
              <TableCell>{point.address}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingPoint(point)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(point.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PointDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} point={editingPoint} onSave={handleSave} />
    </div>
  )
}

