"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { Pencil, Trash2, Plus } from "lucide-react"
import { WarehouseDialog } from "./wirehouse-dialog"

interface Warehouse {
  id: number
  name: string
  address: string
  city: string
}

export function WarehouseTable() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([
    {
      id: 1,
      name: "Центральный склад",
      address: "ул. Ленина, 1",
      city: "Москва",
    },
    {
      id: 2,
      name: "Северный склад",
      address: "пр. Мира, 15",
      city: "Санкт-Петербург",
    },
    {
      id: 3,
      name: "Восточный склад",
      address: "ул. Гагарина, 25",
      city: "Новосибирск",
    },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingWarehouse, setEditingWarehouse] = useState<Warehouse | null>(null)

  const handleSave = (warehouse: Partial<Warehouse>) => {
    if (editingWarehouse) {
      setWarehouses(warehouses.map((w) => (w.id === editingWarehouse.id ? { ...w, ...warehouse } : w)))
    } else {
      setWarehouses([
        ...warehouses,
        {
          id: warehouses.length + 1,
          name: warehouse.name || "",
          address: warehouse.address || "",
          city: warehouse.city || "",
        },
      ])
    }
    setIsDialogOpen(false)
    setEditingWarehouse(null)
  }

  const handleDelete = (id: number) => {
    setWarehouses(warehouses.filter((w) => w.id !== id))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsDialogOpen(true)} className="bg-[#2B579A] hover:bg-[#1E3F7D]">
          <Plus className="mr-2 h-4 w-4" />
          Создать склад
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Наименование</TableHead>
            <TableHead>Адрес склада</TableHead>
            <TableHead>Город</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {warehouses.map((warehouse) => (
            <TableRow key={warehouse.id}>
              <TableCell>{warehouse.id}</TableCell>
              <TableCell>{warehouse.name}</TableCell>
              <TableCell>{warehouse.address}</TableCell>
              <TableCell>{warehouse.city}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingWarehouse(warehouse)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(warehouse.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <WarehouseDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        warehouse={editingWarehouse}
        onSave={handleSave}
      />
    </div>
  )
}

