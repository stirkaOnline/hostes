"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"
import { Pencil, Trash2, Plus } from "lucide-react"
import { CityDialog } from "./cities-dialog"

interface City {
  id: number
  name: string
}

export function CitiesTable() {
  const [cities, setCities] = useState<City[]>([
    { id: 1, name: "Москва" },
    { id: 2, name: "Санкт-Петербург" },
    { id: 3, name: "Новосибирск" },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCity, setEditingCity] = useState<City | null>(null)

  const handleSave = (city: Partial<City>) => {
    if (editingCity) {
      setCities(cities.map((c) => (c.id === editingCity.id ? { ...c, ...city } : c)))
    } else {
      setCities([
        ...cities,
        {
          id: cities.length + 1,
          name: city.name || "",
        },
      ])
    }
    setIsDialogOpen(false)
    setEditingCity(null)
  }

  const handleDelete = (id: number) => {
    setCities(cities.filter((c) => c.id !== id))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setIsDialogOpen(true)} className="bg-[#2B579A] hover:bg-[#1E3F7D]">
          <Plus className="mr-2 h-4 w-4" />
          Создать город
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Наименование города</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities.map((city) => (
            <TableRow key={city.id}>
              <TableCell>{city.id}</TableCell>
              <TableCell>{city.name}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingCity(city)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(city.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CityDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} city={editingCity} onSave={handleSave} />
    </div>
  )
}

