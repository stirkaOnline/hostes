'use client'

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
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
import { X } from 'lucide-react'

interface ClientModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ClientModal({ isOpen, onClose }: ClientModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl">Карточка клиента: физ. лицо</DialogTitle>
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
            <TabsTrigger 
              value="additional"
              className="rounded-t-lg data-[state=active]:bg-[#2F5FE3] data-[state=active]:text-white px-6 py-2"
            >
              Дополнительное
            </TabsTrigger>
          </TabsList>

          <TabsContent value="data" className="mt-6">
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
                  <Label>Пол</Label>
                  <RadioGroup defaultValue="m" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="m" id="modal-m" />
                      <Label htmlFor="modal-m">М</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="f" id="modal-f" />
                      <Label htmlFor="modal-f">Ж</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input placeholder="Введите телефон" />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="Введите email" />
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
                      <SelectItem value="sochi">Сочи</SelectItem>
                      <SelectItem value="irkutsk">Иркутск</SelectItem>
                      <SelectItem value="samara">Самара</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <StatsCard />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

