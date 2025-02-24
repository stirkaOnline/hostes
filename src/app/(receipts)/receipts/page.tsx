'use client'

import { useState } from 'react'
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { ReceiptDetailsModal } from './receipts-detail-modal'
import { Receipt } from '@/app/(receipts)/types/type'

const sampleReceipts: Receipt[] = [
  {
    id: 1,
    bekoNumber: 1,
    openedAt: "30.09.2020 22:31",
    closedAt: "30.09.2020 22:33",
    hasReturn: true,
    cashier: "Иванов И.И.",
    amount: 1000,
    client: "ИП Ивченко",
    fiscalRegistrator: "Виртуальный ФР Авиапарк",
    total: 1000000,
    items: [
      {
        id: 1,
        service: "Биочистка",
        price: 1050,
        discount: 15,
        totalPrice: 1050,
        quantity: 1,
        location: "Авиапарк Москва",
        fiscalRegistrator: "Виртуальный ФР"
      },
      {
        id: 2,
        service: "Биочистка",
        price: 2100,
        discount: 10,
        totalPrice: 2100,
        quantity: 2,
        location: "Авиапарк Москва",
        fiscalRegistrator: "Виртуальный ФР"
      }
    ]
  },
  {
    id: 2,
    bekoNumber: 2,
    openedAt: "30.09.2020 22:32",
    closedAt: "30.09.2020 22:34",
    hasReturn: false,
    cashier: "Иванов И.И.",
    amount: 1000,
    client: "ООО 'Ромашка'",
    fiscalRegistrator: "Виртуальный ФР Авиапарк",
    total: 1000000
  },
  {
    id: 3,
    bekoNumber: 3,
    openedAt: "30.09.2020 22:33",
    closedAt: "30.09.2020 22:35",
    hasReturn: false,
    cashier: "Иванов И.И.",
    amount: 1000,
    client: "ООО 'Доброе утр.'",
    fiscalRegistrator: "Виртуальный ФР Авиапарк",
    total: 1000000
  }
]

export default function ReceiptsPage() {
  const [receipts] = useState<Receipt[]>(sampleReceipts)
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null)

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl mb-6">Чеки</h1>

      <div className="border rounded-lg mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>№ чека бекофис</TableHead>
              <TableHead>Открыт</TableHead>
              <TableHead>Закрыт</TableHead>
              <TableHead>Возврат</TableHead>
              <TableHead>Кассир</TableHead>
              <TableHead>Сумма по чеку</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Фискальный регистратор</TableHead>
              <TableHead>Итого</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receipts.map((receipt) => (
              <TableRow 
                key={receipt.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedReceipt(receipt)}
              >
                <TableCell>{receipt.bekoNumber}</TableCell>
                <TableCell>{receipt.openedAt}</TableCell>
                <TableCell>{receipt.closedAt}</TableCell>
                <TableCell>{receipt.hasReturn ? 'Да' : 'Нет'}</TableCell>
                <TableCell>{receipt.cashier}</TableCell>
                <TableCell>{receipt.amount} ₽</TableCell>
                <TableCell>{receipt.client}</TableCell>
                <TableCell>{receipt.fiscalRegistrator}</TableCell>
                <TableCell>{receipt.total} ₽</TableCell>
                <TableCell>...</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center gap-1">
        {[1, 2, 3, '...', 35, 36].map((page, index) => (
          <Button
            key={index}
            variant={page === 2 ? 'default' : 'ghost'}
            className={page === 2 ? 'bg-blue-700' : ''}
            size="icon"
          >
            {page}
          </Button>
        ))}
      </div>

      <ReceiptDetailsModal
        receipt={selectedReceipt}
        isOpen={!!selectedReceipt}
        onClose={() => setSelectedReceipt(null)}
      />
    </div>
  )
}