"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Input } from "@/shared/ui/input"
import { X } from "lucide-react"

interface City {
  id: number
  name: string
}

interface CityDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  city?: City | null
  onSave: (city: Partial<City>) => void
}

export function CityDialog({ open, onOpenChange, city, onSave }: CityDialogProps) {
  const [name, setName] = useState("")

  useEffect(() => {
    if (city) {
      setName(city.name)
    } else {
      setName("")
    }
  }, [city])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ name })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{city ? "Редактировать город" : "Создание города"}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Input placeholder="Наименование города" value={name} onChange={(e) => setName(e.target.value)} />
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

