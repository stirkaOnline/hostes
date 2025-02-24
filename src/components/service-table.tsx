'use client'

import { Pencil, Trash2 } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../shared/ui/table"
import { Button } from "../shared/ui/button"
import { Service } from '../types/service'

interface ServicesTableProps {
    services: Service[]
    onEdit: (id: number) => void
    onDelete: (id: number) => void
}

export function ServicesTable({ services, onEdit, onDelete }: ServicesTableProps) {
    return (
        <div className="border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Наименование услуги</TableHead>
                        <TableHead>Базовая цена</TableHead>
                        <TableHead>Наценка</TableHead>
                        <TableHead>Стоимость с учетом наценки</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell>{service.id}</TableCell>
                            <TableCell>{service.name}</TableCell>
                            <TableCell>{service.basePrice} ₽</TableCell>
                            <TableCell>{service.markup}%</TableCell>
                            <TableCell>{service.totalPrice} ₽</TableCell>
                            <TableCell>
                <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                        service.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                  {service.status === 'active' ? 'Активен' : 'Деактивирован'}
                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => onEdit(service.id)}
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => onDelete(service.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

