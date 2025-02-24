"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Input } from "@/shared/ui/input"
import { X } from "lucide-react"

interface ExpenseItem {
  id: number
  name: string
}

interface ExpenseItemDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  item?: ExpenseItem | null
  onSave: (item: Partial<ExpenseItem>) => void
}

export function ExpenseItemDialog({ open, onOpenChange, item, onSave }: ExpenseItemDialogProps) {
  const [name, setName] = useState("")

  useEffect(() => {
    if (item) {
      setName(item.name)
    } else {
      setName("")
    }
  }, [item])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ name })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{item ? "Редактировать статью" : "Создание статьи"}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <Input placeholder="Наименование" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="bg-[#2B579A] hover:bg-[#1E3F7D]">
              Добавить
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Отменить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

