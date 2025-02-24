"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { Pencil, MoreHorizontal, Trash2, Plus } from 'lucide-react'
import { AddUserModal } from "./add-user-modal"

interface User {
  id: number
  name: string
  email: string
  role: string
  status: "active" | "deactivated"
}

const users: User[] = [
  {
    id: 1,
    name: "Контрагент с очень длинным названием",
    email: "Test@mail.ru",
    role: "Маркетолог",
    status: "active",
  },
  {
    id: 2,
    name: "Контрагент с очень длинным названием",
    email: "Test@mail.ru",
    role: "Бухгалтер",
    status: "deactivated",
  },
  {
    id: 3,
    name: "Контрагент с очень длинным названием",
    email: "Test@mail.ru",
    role: "Управляющий",
    status: "active",
  },
  {
    id: 4,
    name: "Контрагент с очень длинным названием",
    email: "Test@mail.ru",
    role: "Администратор",
    status: "active",
  },
]

export default function UserManagement() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-normal">Управление аккаунтами</h1>
        <Button 
          className="gap-2 bg-[#2F5FE3] hover:bg-[#2F5FE3]/90 text-sm font-normal"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="h-4 w-4" />
          Добавить пользователя
        </Button>
      </div>
      <div className="bg-white rounded-2xl border-0 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-16 text-sm font-normal text-[#8792A3]">ID</TableHead>
              <TableHead className="text-sm font-normal text-[#8792A3]">Имя</TableHead>
              <TableHead className="text-sm font-normal text-[#8792A3]">Email</TableHead>
              <TableHead className="text-sm font-normal text-[#8792A3]">Роль</TableHead>
              <TableHead className="text-sm font-normal text-[#8792A3]">Статус</TableHead>
              <TableHead className="w-16"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-transparent">
                <TableCell className="text-sm">{user.id}</TableCell>
                <TableCell className="max-w-[300px] truncate text-sm">
                  {user.name}
                </TableCell>
                <TableCell className="text-sm">{user.email}</TableCell>
                <TableCell className="text-sm">{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "active" ? "success" : "destructive"}
                    className="capitalize"
                  >
                    {user.status === "active" ? "Активен" : "Деактивирован"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Редактировать
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Удалить
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-6 mb-2">
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
      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

