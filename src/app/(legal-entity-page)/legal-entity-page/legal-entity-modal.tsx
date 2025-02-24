'use client'

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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog"
import { StatsCard } from "./stats-card"
import { Plus, X } from 'lucide-react'

interface LegalEntityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LegalEntityModal({ isOpen, onClose }: LegalEntityModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px]">
        <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <DialogTitle className="text-xl">Карточка клиента: юр. лицо</DialogTitle>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Выбрать юр. лицо" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="romashka">ООО "Ромашка"</SelectItem>
                <SelectItem value="other">Другие организации</SelectItem>
              </SelectContent>
            </Select>
            <Button size="icon" className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <Tabs defaultValue="data" className="w-full">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none">
            <TabsTrigger 
              value="data"
              className="rounded-t-lg data-[state=active]:bg-[#2F5FE3] data-[state=active]:text-white px-6 py-2"
            >
              Данные
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="rounded-t-lg data-[state=active]:bg-[#2F5FE3] data-[state=active]:text-white px-6 py-2"
            >
              История
            </TabsTrigger>
          </TabsList>

          <TabsContent value="data" className="mt-6">
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
                  <Label>ИНН</Label>
                  <Input placeholder="Введите ИНН" />
                </div>

                <div className="space-y-2">
                  <Label>КПП</Label>
                  <Input placeholder="Введите КПП" />
                </div>

                <div className="space-y-2">
                  <Label>Рас.счет</Label>
                  <Input placeholder="Введите расчетный счет" />
                </div>

                <div className="space-y-2">
                  <Label>Корр.счет</Label>
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
                  averageVolume="1 590 кг"
                  visitsCount="23"
                  totalSum="36 789 ₽"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button className="bg-[#2F5FE3] hover:bg-[#2F5FE3]/90">
                Сохранить
              </Button>
              <Button variant="outline" onClick={onClose}>
                Отменить
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

