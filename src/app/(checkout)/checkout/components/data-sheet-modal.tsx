"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { Button } from "@/shared/ui/button"
import { FileCheck } from "lucide-react"
import { Checkbox } from "@/shared/ui/checkbox"
import { Label } from "@/shared/ui/label"
import { Input } from "@/shared/ui/input"

interface DataSheetModalProps {
  isActive: boolean
}

export default function DataSheetModal({ isActive }: DataSheetModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <FileCheck className={`h-4 w-4 ${isActive ? "text-green-500" : "text-red-500"}`} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Технический паспорт</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {/* Order Details */}
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Квитанция-договор ВП №" className="bg-[#F8F9FC]" />
            <Input placeholder="Дата приема заказа" type="date" className="bg-[#F8F9FC]" />
          </div>

          {/* Processing Types */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Вид обработки:</h3>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="manual" />
                <Label htmlFor="manual">Ручная чистка по технологии БИО</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="stain" />
                <Label htmlFor="stain">Пятновыведение / удаление пятен</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hydrophobic" />
                <Label htmlFor="hydrophobic">Гидрофобная (влагозащитная)</Label>
              </div>
            </div>
          </div>

          {/* Defects Checklist */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm">Дефекты изделия:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Текстиль:</h4>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="wear" />
                    <Label htmlFor="wear">Вытяг/Разноотеночность</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tears" />
                    <Label htmlFor="tears">Порывы/Разрывы</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="scratches" />
                    <Label htmlFor="scratches">Царапины/Раздублирование</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Кожа:</h4>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="leather-hardness" />
                    <Label htmlFor="leather-hardness">Жесткость/Хруст кожевой</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="leather-scratches" />
                    <Label htmlFor="leather-scratches">Царапины</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="leather-locks" />
                    <Label htmlFor="leather-locks">Замины/заломы</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Особые отметки:</Label>
            <Input id="notes" className="bg-[#F8F9FC]" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

