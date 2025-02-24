"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { Pencil, Trash2, Plus } from 'lucide-react'
import { PositionDialog } from "./position-dialog"
import { Badge } from "@/shared/ui/badge"

interface Position {
  id: number
  name: string
  createdAt: string
  employeeCount: number
  isActive: boolean
}

export function PositionsTable() {
  const [positions, setPositions] = useState<Position[]>([
    {
      id: 1,
      name: "Кассир",
      createdAt: "01.01.2025 20:01",
      employeeCount: 3,
      isActive: true,
    },
    {
      id: 2,
      name: "Оператор",
      createdAt: "01.01.2025 20:01",
      employeeCount: 10,
      isActive: false,
    },
    {
      id: 3,
      name: "Администратор",
      createdAt: "01.01.2025 20:01",
      employeeCount: 5,
      isActive: true,
    },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPosition, setEditingPosition] = useState<Position | null>(null)

  const handleSave = (position: Partial<Position>) => {
    if (editingPosition) {
      setPositions(positions.map(p => 
        p.id === editingPosition.id ? { ...p, ...position } : p
      ))
    } else {
      setPositions([...positions, {
        id: positions.length + 1,
        name: position.name || "",
        createdAt: new Date().toLocaleString("ru"),
        employeeCount: position.employeeCount || 0,
        isActive: true,
      }])
    }
    setIsDialogOpen(false)
    setEditingPosition(null)
  }

  const handleDelete = (id: number) => {
    setPositions(positions.filter(p => p.id !== id))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-[#2B579A] hover:bg-[#1E3F7D]"
        >
          <Plus className="mr-2 h-4 w-4" />
          Создать должность
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Наименование</TableHead>
            <TableHead>Дата и время создания</TableHead>
            <TableHead>Кол-во сотрудников</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {positions.map((position) => (
            <TableRow key={position.id}>
              <TableCell>{position.id}</TableCell>
              <TableCell>{position.name}</TableCell>
              <TableCell>{position.createdAt}</TableCell>
              <TableCell>{position.employeeCount}</TableCell>
              <TableCell>
                <Badge 
                  variant={position.isActive ? "default" : "destructive"}
                  className={position.isActive ? "bg-[#E8F5E9] text-[#1B5E20] hover:bg-[#E8F5E9]" : ""}
                >
                  {position.isActive ? "Активен" : "Деактивирован"}
                </Badge>
              </TableCell>
              <TableCell className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingPosition(position)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(position.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PositionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        position={editingPosition}
        onSave={handleSave}
      />
    </div>
  )
}

