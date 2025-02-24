'use client'

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/ui/dialog"

interface CreateUnitModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateUnitModal({ isOpen, onClose }: CreateUnitModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Создать единицу измерения</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Наименование</Label>
            <Input id="name" placeholder="Введите наименование" />
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

