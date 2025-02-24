"use client"

import * as React from "react"
import Link from 'next/link'
import { Search, ChevronDown, Pencil } from 'lucide-react'
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

interface Client {
  id: number
  lastName: string
  firstName: string
  city: string
  address: string
  type: string
  name: string
  phone: string
}

const clients: Client[] = [
  {
    id: 345,
    lastName: "Иванов",
    firstName: "Иван",
    city: "Москва",
    address: "Ленина, 50",
    type: "Физ. лицо",
    name: "-",
    phone: "+7 (999) 999 99 99"
  },
  {
    id: 564,
    lastName: "Петров",
    firstName: "Петр",
    city: "Москва",
    address: "Первомайская, 13",
    type: "Физ. лицо",
    name: "-",
    phone: "+7 (999) 999 99 99"
  },
  {
    id: 5799,
    lastName: "-",
    firstName: "-",
    city: "Москва",
    address: "Ленина, 50",
    type: "Юр. лицо",
    name: "ООО `Ромашка`",
    phone: "+7 (999) 999 99 99"
  },
]

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-normal mb-6">Клиенты</h1>
        
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Поиск" 
              className="pl-10 bg-white" 
            />
          </div>
          <Select>
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Тип клиента" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Физ. лицо</SelectItem>
              <SelectItem value="legal">Юр. лицо</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Город" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moscow">Москва</SelectItem>
              <SelectItem value="spb">Санкт-Петербург</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Адрес" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lenina">Ленина, 50</SelectItem>
              <SelectItem value="pervomayskaya">Первомайская, 13</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="default" 
            className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90"
          >
            Сбросить фильтры
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm mb-6">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-sm font-normal text-[#8792A3]">ID</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Фамилия</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Имя</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Город</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Адрес</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Тип клиента</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Название</TableHead>
                <TableHead className="text-sm font-normal text-[#8792A3]">Телефон</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            <a href="/client-detail-page" className=" text-gray-600 hover:text-blue-700 pl-4 flex justify-between flex-col w-full block">
              {clients.map((client) => (
                <TableRow key={client.id} className="hover:bg-transparent flex h-full w-full justify-between flex-row rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <TableCell className="text-sm">{client.id}</TableCell>
                  <TableCell className="text-sm">{client.lastName}</TableCell>
                  <TableCell className="text-sm">{client.firstName}</TableCell>
                  <TableCell className="text-sm">{client.city}</TableCell>
                  <TableCell className="text-sm">{client.address}</TableCell>
                  <TableCell className="text-sm">{client.type}</TableCell>
                  <TableCell className="text-sm">{client.name}</TableCell>
                  <TableCell className="text-sm">{client.phone}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              </a>
            </TableBody>
          </Table>
        </div>

        <Button 
          variant="default" 
          className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90 mb-6"
        >
          Экспорт в Excel
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
      </div>
    </div>
  )
}

