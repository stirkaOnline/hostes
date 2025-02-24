'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui/dialog"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"
import { Label } from "@/shared/ui/label"
import { X } from 'lucide-react'
import { useState } from "react"
import type { NewRole, Permission, Role } from "../types/role"

interface CreateRoleModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (role: NewRole) => void
  initialData?: Role | null
}

export function CreateRoleModal({ isOpen, onClose, onSave, initialData }: CreateRoleModalProps) {
  const [name, setName] = useState(initialData?.name || '')
  const [permissions, setPermissions] = useState<Permission[]>(
    initialData?.permissions || Array.from({ length: 9 }, (_, i) => ({
      sectionId: i + 1,
      write: false,
      read: false,
      noAccess: true
    }))
  )

  const handlePermissionChange = (sectionId: number, type: 'write' | 'read' | 'noAccess') => {
    setPermissions(prev => prev.map(p => {
      if (p.sectionId === sectionId) {
        return {
          ...p,
          write: type === 'write',
          read: type === 'read',
          noAccess: type === 'noAccess'
        }
      }
      return p
    }))
  }

  const handleSave = () => {
    onSave({ name, permissions })
    setName('')
    setPermissions(Array.from({ length: 9 }, (_, i) => ({
      sectionId: i + 1,
      write: false,
      read: false,
      noAccess: true
    })))
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {initialData ? 'Редактировать роль' : 'Новая роль'}
          </DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Наименование роли</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите название роли"
            />
          </div>

          <div className="space-y-6">
            <Label className="text-lg font-semibold">Настройка прав</Label>
            {permissions.map((permission) => (
              <div key={permission.sectionId} className="grid grid-cols-4 items-center gap-6">
                <span className="font-medium">Раздел {permission.sectionId}</span>
                <RadioGroup
                  value={
                    permission.write
                      ? 'write'
                      : permission.read
                      ? 'read'
                      : 'noAccess'
                  }
                  onValueChange={(value) =>
                    handlePermissionChange(
                      permission.sectionId,
                      value as 'write' | 'read' | 'noAccess'
                    )
                  }
                  className="col-span-3 flex justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="write" id={`write-${permission.sectionId}`} />
                    <Label htmlFor={`write-${permission.sectionId}`}>Писать</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="read" id={`read-${permission.sectionId}`} />
                    <Label htmlFor={`read-${permission.sectionId}`}>Читать</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="noAccess" id={`noAccess-${permission.sectionId}`} />
                    <Label htmlFor={`noAccess-${permission.sectionId}`}>Нет доступа</Label>
                  </div>
                </RadioGroup>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-start gap-4 pt-6">
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            Сохранить
          </Button>
          <Button variant="outline" onClick={onClose}>
            Отменить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

