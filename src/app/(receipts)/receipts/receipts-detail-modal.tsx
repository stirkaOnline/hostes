'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { Receipt } from "@/app/(receipts)/types/type"
import { X } from 'lucide-react'

interface ReceiptDetailsModalProps {
  receipt: Receipt | null
  isOpen: boolean
  onClose: () => void
}

export function ReceiptDetailsModal({ receipt, isOpen, onClose }: ReceiptDetailsModalProps) {
  if (!receipt) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Детали чека №{receipt.id}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="text-sm text-gray-500">Номер заказа</label>
            <div>{receipt.bekoNumber}</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Сумма по чеку, ₽</label>
            <div>{receipt.amount}</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Тип оплаты</label>
            <div>Наличные</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Дата открытия чека</label>
            <div>{receipt.openedAt}</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">До вычета скидок/надбавок, ₽</label>
            <div>{receipt.total}</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Кассир</label>
            <div>{receipt.cashier}</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Дата закрытия</label>
            <div>{receipt.closedAt}</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Безнал., ₽</label>
            <div>0</div>
          </div>
          <div>
            <label className="text-sm text-gray-500">Фискальный регистратор</label>
            <div>{receipt.fiscalRegistrator}</div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4">Позиции в чеке</h3>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Услуга</TableHead>
                  <TableHead>Цена</TableHead>
                  <TableHead>Скидка</TableHead>
                  <TableHead>Об. стоимость</TableHead>
                  <TableHead>Кол-во</TableHead>
                  <TableHead>Место</TableHead>
                  <TableHead>Фискальный регистр.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {receipt.items?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.service}</TableCell>
                    <TableCell>{item.price} ₽</TableCell>
                    <TableCell>{item.discount}%</TableCell>
                    <TableCell>{item.totalPrice} ₽</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.fiscalRegistrator}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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