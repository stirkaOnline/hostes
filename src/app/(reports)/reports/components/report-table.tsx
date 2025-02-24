"use client"

import { CalendarIcon } from 'lucide-react'
import * as React from "react"

import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/shared/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui/table"

const sampleData = [
    {
        id: 1,
        date: "30.09.2020 22:31",
        checksTotal: 1,
        cashier: "Иванов И.И.",
        amount: "1 000 ₽",
        clientGroup: "Физ. лицо",
        totalSales: "10 900 ₽",
        paymentMethod: "Наличные",
        city: "Москва",
    },
    {
        id: 2,
        date: "30.09.2020 22:32",
        checksTotal: 1,
        cashier: "Иванов И.И.",
        amount: "1 000 ₽",
        clientGroup: "Физ. лицо",
        totalSales: "10 900 ₽",
        paymentMethod: "Безналичные",
        city: "Иркутск",
    },
    {
        id: 3,
        date: "30.09.2020 22:33",
        checksTotal: 2,
        cashier: "Иванов И.И.",
        amount: "1 000 ₽",
        clientGroup: "Физ. лицо",
        totalSales: "10 900 ₽",
        paymentMethod: "Наличные",
        city: "Сочи",
    },
]

export function ReportTable() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="space-y-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className="w-[280px] justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                            date.toLocaleDateString("ru", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })
                        ) : (
                            <span>12 декабря 2024 - 12 января 2025</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Дата и время</TableHead>
                            <TableHead>Чеков итого</TableHead>
                            <TableHead>Кассир</TableHead>
                            <TableHead>Сумма внесения</TableHead>
                            <TableHead>Группа клиентов</TableHead>
                            <TableHead>Сумма продаж, ₽</TableHead>
                            <TableHead>Способ оплаты</TableHead>
                            <TableHead>Город</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sampleData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.checksTotal}</TableCell>
                                <TableCell>{row.cashier}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.clientGroup}</TableCell>
                                <TableCell>{row.totalSales}</TableCell>
                                <TableCell>{row.paymentMethod}</TableCell>
                                <TableCell>{row.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

