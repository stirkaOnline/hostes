'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { CollectionOperation } from "@/app/(collections)/types/collection"
import { X } from 'lucide-react'

interface CollectionDetailsModalProps {
  operation: CollectionOperation | null
  isOpen: boolean
  onClose: () => void
}

export function CollectionDetailsModal({ operation, isOpen, onClose }: CollectionDetailsModalProps) {
  if (!operation) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Детали операции: инкассация №{operation.id}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Время открытия</Label>
              <Input value={operation.datetime} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Сотрудник, открывший смену</Label>
              <Select defaultValue={operation.employee}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите сотрудника" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={operation.employee}>{operation.employee}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Статус</Label>
              <Input value={operation.status || ''} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Кассир</Label>
              <Select defaultValue={operation.employee}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите кассира" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={operation.employee}>{operation.employee}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Фискальный регистратор</Label>
              <Input value={operation.fiscalRegistrator} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Кассовая смена</Label>
              <Input value={operation.cashShift} readOnly />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Итого, ₽</Label>
              <Input value={operation.amount} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Выручка, ₽</Label>
              <Input value={operation.revenue || ''} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Себестоимость, ₽</Label>
              <Input value={operation.cost || ''} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Кол-во чеков</Label>
              <Input value={operation.receiptCount || ''} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Сумма инкасации</Label>
              <Input value={operation.cashAmount} readOnly />
            </div>

            <div className="space-y-2">
              <Label>Место реализации</Label>
              <Select defaultValue={operation.location}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите место" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={operation.location}>{operation.location}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-4 mt-6">
          <Button className="bg-blue-700 hover:bg-blue-800">
            Сохранить
          </Button>
          <Button variant="outline" onClick={onClose}>
            Отменить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

