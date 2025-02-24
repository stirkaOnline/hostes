"use client"

import { useState, useRef } from "react"
import { Search, Calendar, Upload, FileCheck, Trash2 } from "lucide-react"
import Image from "next/image"

import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table"

export default function CheckoutPage() {
  const [customerType, setCustomerType] = useState<"individual" | "business">("individual")
  const [uploadedImages, setUploadedImages] = useState<{ [key: number]: string }>({})
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImages((prev) => ({ ...prev, [index]: e.target?.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">
      <div className="space-y-6">
        {/* Customer Search and Type Selection */}
        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Поиск клиента" className="pl-10 h-10 bg-[#F8F9FC] border-0" />
            </div>
            <div className="flex items-center gap-6">
              <RadioGroup
                defaultValue="individual"
                onValueChange={(value) => setCustomerType(value as "individual" | "business")}
                className="flex items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="individual" id="individual" className="text-blue-600" />
                  <Label htmlFor="individual" className="text-gray-600">
                    Физ.лицо
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="business" id="business" className="text-blue-600" />
                  <Label htmlFor="business" className="text-gray-600">
                    Юр.лицо
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Customer Information Form */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-gray-600">Информация о клиенте</h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-3">
                <Input placeholder="Фамилия" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-3">
                <Input placeholder="Имя" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-3">
                <Input placeholder="Отчество" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-3">
                <RadioGroup defaultValue="M" className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="M" id="male" className="h-4 w-4" />
                    <Label htmlFor="male" className="text-sm">
                      М
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="F" id="female" className="h-4 w-4" />
                    <Label htmlFor="female" className="text-sm">
                      Ж
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="col-span-3">
                <Input type="date" placeholder="Дата рождения" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-3">
                <Input placeholder="Телефон" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-3">
                <Input placeholder="E-mail" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-3">
                <Select>
                  <SelectTrigger className="h-10 bg-[#F8F9FC] border-0">
                    <SelectValue placeholder="Откуда о нас узнали" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internet">Интернет</SelectItem>
                    <SelectItem value="friends">От друзей</SelectItem>
                    <SelectItem value="ads">Реклама</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3">
                <Select>
                  <SelectTrigger className="h-10 bg-[#F8F9FC] border-0">
                    <SelectValue placeholder="Город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-6">
                <Input placeholder="Улица" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-2">
                <Input placeholder="Дом" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
              <div className="col-span-1">
                <Input placeholder="Кв" className="h-10 bg-[#F8F9FC] border-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Service Selection */}
        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Поиск услуги" className="pl-10 h-10 bg-[#F8F9FC] border-0" />
          </div>

          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-100">
                <TableHead className="text-xs font-medium text-gray-600">№</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Услуга</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Кол-во</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Цена</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Итого</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Фото</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Размер</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Бренд</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Цвет</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Тех.паспорт</TableHead>
                <TableHead className="text-xs font-medium text-gray-600">Дата готовности</TableHead>
                <TableHead className="text-xs font-medium text-gray-600"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[0, 1, 2].map((index) => (
                <TableRow key={index}>
                  <TableCell className="text-sm">{index + 1}</TableCell>
                  <TableCell className="text-sm">Прачечная</TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="1" className="w-16 h-8 bg-[#F8F9FC] border-0 text-sm" />
                  </TableCell>
                  <TableCell className="text-sm">1 000 ₽</TableCell>
                  <TableCell className="text-sm">1 000 ₽</TableCell>
                  <TableCell>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileSelect(index)}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {uploadedImages[index] ? (
                        <Image
                          src={uploadedImages[index] || "/placeholder.svg"}
                          alt="Uploaded"
                          width={24}
                          height={24}
                          className="rounded-sm object-cover"
                        />
                      ) : (
                        <Upload className="h-4 w-4" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="h-8 w-16 bg-[#F8F9FC] border-0">
                        <SelectValue placeholder="M" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="xs">XS</SelectItem>
                        <SelectItem value="s">S</SelectItem>
                        <SelectItem value="m">M</SelectItem>
                        <SelectItem value="l">L</SelectItem>
                        <SelectItem value="xl">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="h-8 w-24 bg-[#F8F9FC] border-0">
                        <SelectValue placeholder="Zara" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zara">Zara</SelectItem>
                        <SelectItem value="gucci">Gucci</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select>
                      <SelectTrigger className="h-8 w-24 bg-[#F8F9FC] border-0">
                        <SelectValue placeholder="Черный" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">Черный</SelectItem>
                        <SelectItem value="blue">Синий</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <FileCheck className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Input type="text" defaultValue="01.02.2025" className="h-8 w-24 bg-[#F8F9FC] border-0 text-sm" />
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <RadioGroup defaultValue="cash" className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="text-sm">
                    Безнал.
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="text-sm">
                    Нал.
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-4">
              <Input placeholder="ПРОМОКОД" className="h-10 w-32 bg-[#F8F9FC] border-0 text-sm uppercase" />
              <span className="text-sm font-medium">4 200 ₽</span>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="bg-white rounded-lg p-6">
          <Input placeholder="Комментарии к заказу" className="h-10 bg-[#F8F9FC] border-0" />
        </div>
        <div className="mt-6">
          <Button variant="default" className="bg-blue-700 hover:bg-blue-800">
            Оформить
          </Button>
        </div>
      </div>
    </div>
  )
}

