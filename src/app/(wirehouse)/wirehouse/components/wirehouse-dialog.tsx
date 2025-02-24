"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Input } from "@/shared/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { X } from "lucide-react"

interface Warehouse {
  id: number
  name: string
  address: string
  city: string
}

interface WarehouseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  warehouse?: Warehouse | null
  onSave: (warehouse: Partial<Warehouse>) => void
}

const cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"]

export function WarehouseDialog({ open, onOpenChange, warehouse, onSave }: WarehouseDialogProps) {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")

  useEffect(() => {
    if (warehouse) {
      setName(warehouse.name)
      setAddress(warehouse.address)
      setCity(warehouse.city)
    } else {
      setName("")
      setAddress("")
      setCity("")
    }
  }, [warehouse])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ name, address, city })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{warehouse ? "Редактировать склад" : "Создание склада"}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <Input placeholder="Наименование склада" value={name} onChange={(e) => setName(e.target.value)} />
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите город" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Адрес склада" value={address} onChange={(e) => setAddress(e.target.value)} />
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

