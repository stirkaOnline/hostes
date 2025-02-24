"use client"

import * as React from "react"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { ClientModal } from "./client-modal"
import { StatsCard } from "./stats-card"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"

export default function ClientDetailsPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#2F5FE3]">
            <a href="/clients-list">
                <ArrowLeft className="h-4 w-4" />
            </a>
            <span>Клиенты / Физ. лицо: Иванов И.И.</span>
          </div>
          <Button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90"
          >
            Редактировать карточку
          </Button>
        </div>

        <Tabs defaultValue="client-data" className="w-full">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none">
            <TabsTrigger 
              value="client-data"
              className="rounded-t-lg data-[state=active]:bg-[#2F5FE3] data-[state=active]:text-white px-6 py-2"
            >
              Данные клиента
            </TabsTrigger>
            <TabsTrigger 
              value="order-history"
              className="rounded-t-lg data-[state=active]:bg-[#2F5FE3] data-[state=active]:text-white px-6 py-2"
            >
              История заказов
            </TabsTrigger>
            <TabsTrigger 
              value="additional"
              className="rounded-t-lg data-[state=active]:bg-[#2F5FE3] data-[state=active]:text-white px-6 py-2"
            >
              Дополнительно
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="client-data" className="mt-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Фамилия</Label>
                  <Input placeholder="Введите фамилию" />
                </div>
                
                <div className="space-y-2">
                  <Label>Имя</Label>
                  <Input placeholder="Введите имя" />
                </div>

                <div className="space-y-2">
                  <Label>Отчество</Label>
                  <Input placeholder="Введите отчество" />
                </div>

                <div className="space-y-2">
                  <Label>Дата рождения</Label>
                  <Input type="date" />
                </div>

                <div className="space-y-2">
                  <Label>Пол</Label>
                  <RadioGroup defaultValue="m" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="m" id="m" />
                      <Label htmlFor="m">М</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="f" id="f" />
                      <Label htmlFor="f">Ж</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input placeholder="Введите телефон" />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Введите email" />
                </div>

                <div className="space-y-2">
                  <Label>Город</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="sochi">Сочи</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Откуда узнали</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите источник" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internet">Интернет</SelectItem>
                      <SelectItem value="friends">От друзей</SelectItem>
                      <SelectItem value="ads">Реклама</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <StatsCard />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90">
                Сохранить
              </Button>
              <Button variant="outline">
                К списку клиентов
              </Button>
            </div>
          </TabsContent>
          </Tabs>
      </div>

      <ClientModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

