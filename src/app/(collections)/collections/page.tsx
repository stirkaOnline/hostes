'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { Button } from "@/shared/ui/button"
import { CollectionDetailsModal } from './collections-detail-modal'
import { CollectionOperation } from '@/app/(collections)/types/collection'

const sampleOperations: CollectionOperation[] = [
  {
    id: 1,
    bekoNumber: 1,
    datetime: "30.09.2020 22:31",
    operationType: "Инкассация",
    employee: "Иванов И.И.",
    amount: 1000,
    cashAmount: 1000000,
    location: "Хозяюшка авиапарк",
    fiscalRegistrator: "Виртуальный ФР Авиапарк",
    comments: "-",
    cashShift: 100,
    status: "Активен",
    revenue: 1500000,
    cost: 900000,
    receiptCount: 150
  },
  {
    id: 2,
    bekoNumber: 2,
    datetime: "30.09.2020 22:32",
    operationType: "Инкассация",
    employee: "Иванов И.И.",
    amount: 1000,
    cashAmount: 1000000,
    location: "Хозяюшка авиапарк",
    fiscalRegistrator: "Виртуальный ФР Авиапарк",
    comments: "Комментарий",
    cashShift: 345
  },
  {
    id: 3,
    bekoNumber: 3,
    datetime: "30.09.2020 22:33",
    operationType: "Инкассация",
    employee: "Иванов И.И.",
    amount: 1000,
    cashAmount: 1000000,
    location: "Хозяюшка авиапарк",
    fiscalRegistrator: "Виртуальный ФР Авиапарк",
    comments: "-",
    cashShift: 777
  }
]

export default function CollectionsPage() {
  const [operations] = useState<CollectionOperation[]>(sampleOperations)
  const [selectedOperation, setSelectedOperation] = useState<CollectionOperation | null>(null)

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl mb-6">Внесения / инкассация</h1>

      <div className="border rounded-lg mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>№ операции бекофис</TableHead>
              <TableHead>Дата и время</TableHead>
              <TableHead>Тип операции</TableHead>
              <TableHead>Сотрудник</TableHead>
              <TableHead>Сумма внесения</TableHead>
              <TableHead>Сумма наличных в кассе</TableHead>
              <TableHead>Место реализации</TableHead>
              <TableHead>Фискальный регистратор</TableHead>
              <TableHead>Комментарий</TableHead>
              <TableHead>Кассовая смена</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {operations.map((operation) => (
              <TableRow 
                key={operation.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedOperation(operation)}
              >
                <TableCell>{operation.bekoNumber}</TableCell>
                <TableCell>{operation.datetime}</TableCell>
                <TableCell>{operation.operationType}</TableCell>
                <TableCell>{operation.employee}</TableCell>
                <TableCell>{operation.amount} ₽</TableCell>
                <TableCell>{operation.cashAmount} ₽</TableCell>
                <TableCell>{operation.location}</TableCell>
                <TableCell>{operation.fiscalRegistrator}</TableCell>
                <TableCell>{operation.comments}</TableCell>
                <TableCell>{operation.cashShift}</TableCell>
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

      <CollectionDetailsModal
        operation={selectedOperation}
        isOpen={!!selectedOperation}
        onClose={() => setSelectedOperation(null)}
      />
    </div>
  )
}

