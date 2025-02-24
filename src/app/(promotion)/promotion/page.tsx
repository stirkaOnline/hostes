"use client"

import * as React from "react"
import { Pencil, Plus, Trash2, ChevronDown } from 'lucide-react'
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { CreatePromotionModal } from "./create-promotion-modal"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"

interface Promotion {
  id: number
  name: string
  status: "active" | "deactivated"
}

const promotions: Promotion[] = [
  {
    id: 1,
    name: "Новый посетитель",
    status: "active",
  },
  {
    id: 2,
    name: "Акция",
    status: "deactivated",
  },
  {
    id: 3,
    name: "Акция",
    status: "active",
  },
  {
    id: 4,
    name: "Акция",
    status: "active",
  },
]

export default function PromotionsPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-normal">Акции</h1>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90 gap-2"
          >
            <Plus className="h-4 w-4" />
            Создать акцию
          </Button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-16 text-sm font-normal text-[#8792A3]">ID</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Наименование акции</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Статус</TableHead>
                <TableHead className="w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((promotion) => (
                <TableRow key={promotion.id} className="hover:bg-transparent">
                  <TableCell className="text-sm">{promotion.id}</TableCell>
                  <TableCell className="text-sm">{promotion.name}</TableCell>
                  <TableCell>
                    <Badge
                      variant={promotion.status === "active" ? "success" : "destructive"}
                    >
                      {promotion.status === "active" ? "Активен" : "Деактивирован"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center mt-6">
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]" disabled>
              {"<"}
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]">
              1
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 bg-[#EEF2FF] text-[#2F5FE3]">
              2
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]">
              3
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]" disabled>
              ...
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]">
              35
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]">
              36
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-[#8792A3]">
              {">"}
            </Button>
          </nav>
        </div>
        <div className="mt-4">
          <Button className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90 w-[200px]">
            Сохранить
          </Button>
        </div>
        <CreatePromotionModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  )
}

