"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { Pencil, Trash2, Plus } from "lucide-react"
import { ExpenseItemDialog } from "./expense-item-dialog"

interface ExpenseItem {
  id: number
  name: string
}

export function ExpenseItemsTable() {
  const [items, setItems] = useState<ExpenseItem[]>([
    { id: 1, name: "Аквачистка" },
    { id: 2, name: "Упаковка" },
    { id: 3, name: "Расходы на связь" },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<ExpenseItem | null>(null)

  const handleSave = (item: Partial<ExpenseItem>) => {
    if (editingItem) {
      setItems(items.map((i) => (i.id === editingItem.id ? { ...i, ...item } : i)))
    } else {
      setItems([
        ...items,
        {
          id: items.length + 1,
          name: item.name || "",
        },
      ])
    }
    setIsDialogOpen(false)
    setEditingItem(null)
  }

  const handleDelete = (id: number) => {
    setItems(items.filter((i) => i.id !== id))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsDialogOpen(true)} className="bg-[#2B579A] hover:bg-[#1E3F7D]">
          <Plus className="mr-2 h-4 w-4" />
          Создать статью
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Наименование</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingItem(item)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ExpenseItemDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} item={editingItem} onSave={handleSave} />
    </div>
  )
}

