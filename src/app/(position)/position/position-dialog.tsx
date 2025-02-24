"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog"
import { Input } from "@/shared/ui/input"
import { X } from 'lucide-react'

interface Position {
  id: number
  name: string
  createdAt: string
  employeeCount: number
  isActive: boolean
}

interface PositionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  position?: Position | null
  onSave: (position: Partial<Position>) => void
}

export function PositionDialog({
  open,
  onOpenChange,
  position,
  onSave,
}: PositionDialogProps) {
  const [name, setName] = useState("")
  const [employeeCount, setEmployeeCount] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  useEffect(() => {
    if (position) {
      setName(position.name)
      setEmployeeCount(position.employeeCount.toString())
      const [datePart, timePart] = position.createdAt.split(" ")
      setDate(datePart)
      setTime(timePart)
    } else {
      setName("")
      setEmployeeCount("")
      setDate(new Date().toLocaleDateString("ru"))
      setTime(new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }))
    }
  }, [position])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      name,
      employeeCount: parseInt(employeeCount) || 0,
      createdAt: `${date} ${time}`
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {position ? "Редактировать должность" : "Новая должность"}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Input
              placeholder="Наименование роли"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Input
              type="number"
              placeholder="Количество сотрудников"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              type="submit"
              className="bg-[#2B579A] hover:bg-[#1E3F7D]"
            >
              Сохранить
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Отменить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

