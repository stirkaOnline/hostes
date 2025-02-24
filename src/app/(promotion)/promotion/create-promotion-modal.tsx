'use client'

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/ui/dialog"

interface CreatePromotionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreatePromotionModal({ isOpen, onClose }: CreatePromotionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Создать акцию</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Наименование акции</Label>
            <Input id="name" placeholder="Введите название акции" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Статус</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Активен</SelectItem>
                <SelectItem value="deactivated">Деактивирован</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Отмена
          </Button>
          <Button className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90">
            Создать
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

