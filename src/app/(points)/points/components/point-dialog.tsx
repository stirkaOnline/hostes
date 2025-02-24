"use client"

import { useState, useEffect } from "react"
import { Button } from "@/shared/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Input } from "@/shared/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { X } from "lucide-react"

interface Point {
  id: number
  legalName: string
  interiorType: string
  phone: string
  address: string
}

interface PointDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  point?: Point | null
  onSave: (point: Partial<Point>) => void
}

const interiorTypes = ["Собственная сеть", "Франчайзи"]

export function PointDialog({ open, onOpenChange, point, onSave }: PointDialogProps) {
  const [legalName, setLegalName] = useState("")
  const [interiorType, setInteriorType] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  useEffect(() => {
    if (point) {
      setLegalName(point.legalName)
      setInteriorType(point.interiorType)
      setPhone(point.phone)
      setAddress(point.address)
    } else {
      setLegalName("")
      setInteriorType("")
      setPhone("")
      setAddress("")
    }
  }, [point])

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length === 0) return ""
    if (numbers.length <= 1) return `+7 (${numbers}`
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ legalName, interiorType, phone, address })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{point ? "Редактировать точку" : "Создание точки"}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <Input
              placeholder="Юридическое название"
              value={legalName}
              onChange={(e) => setLegalName(e.target.value)}
            />
            <Select value={interiorType} onValueChange={setInteriorType}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип сети" />
              </SelectTrigger>
              <SelectContent>
                {interiorTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="Номер телефона" value={phone} onChange={handlePhoneChange} />
            <Input placeholder="Юридический адрес" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="bg-[#2196F3] hover:bg-[#1976D2]">
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

