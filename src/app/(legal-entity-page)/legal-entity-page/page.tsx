"use client"

import * as React from "react"
import { ArrowLeft, Plus } from 'lucide-react'
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
import { LegalEntityModal } from "./legal-entity-modal"
import { StatsCard } from "./stats-card"

export default function LegalEntityPage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-[#F8F9FC]">
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 text-[#2F5FE3]" />
            <span className="text-[#2F5FE3]">Клиенты / Юр. лицо: ООО "Ромашка"</span>
          </div>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Выбрать юр. лицо" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="romashka">ООО "Ромашка"</SelectItem>
                <SelectItem value="other">Другие организации</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90"
            >
              Редактировать карточку
            </Button>
          </div>
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
          </TabsList>
          
          <TabsContent value="client-data" className="mt-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Название компании</Label>
                  <Input placeholder="Введите название компании" />
                </div>
                
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
                  <Label>Телефон</Label>
                  <Input placeholder="Введите телефон" />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Введите email" />
                </div>

                <div className="space-y-2">
                  <Label>Юридический адрес</Label>
                  <Input placeholder="Введите юридический адрес" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Город</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>ИНН</Label>
                  <Input placeholder="Введите ИНН" />
                </div>

                <div className="space-y-2">
                  <Label>КПП</Label>
                  <Input placeholder="Введите КПП" />
                </div>

                <div className="space-y-2">
                  <Label>БИК</Label>
                  <Input placeholder="Введите БИК" />
                </div>

                <div className="space-y-2">
                  <Label>Рас. счет</Label>
                  <Input placeholder="Введите расчетный счет" />
                </div>

                <div className="space-y-2">
                  <Label>Корр. счет</Label>
                  <Input placeholder="Введите корр. счет" />
                </div>

                <div className="space-y-2">
                  <Label>Прайс-лист</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите прайс-лист" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартный</SelectItem>
                      <SelectItem value="vip">VIP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <StatsCard 
                  averageVolume="150 кг"
                  visitsCount="23"
                  totalSum="36 789 ₽"
                />
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

      <LegalEntityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

