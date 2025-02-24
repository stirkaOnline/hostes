"use client"

import * as React from "react"
import { Plus, Pencil } from 'lucide-react'
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { CreateUnitModal } from "./create-units-modal"

interface Unit {
  id: number
  name: string
}

const units: Unit[] = [
  {
    id: 1,
    name: "Штуки",
  },
  {
    id: 2,
    name: "Литры",
  },
  {
    id: 3,
    name: "Килограммы",
  },
]

export default function MeasurementUnitsPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-normal">Единицы измерения</h1>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90 gap-2"
          >
            <Plus className="h-4 w-4" />
            Создать единицу
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm mb-6">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-16 text-sm font-normal text-[#8792A3]">ID</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Наименование акции</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {units.map((unit) => (
                <TableRow key={unit.id} className="hover:bg-transparent">
                  <TableCell className="text-sm">{unit.id}</TableCell>
                  <TableCell className="text-sm">{unit.name}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Button 
          className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90 mb-6"
        >
          Сохранить
        </Button>

        <div className="flex justify-center">
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

        <CreateUnitModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </div>
  )
}

