'use client'

import { useState } from 'react'
import { Button } from "@/shared/ui/button"
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { CreateRoleModal } from "./components/create-role-modal"
import { StatusBadge } from "./components/status-badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import type { Role, NewRole } from "./types/role"

const initialRoles: Role[] = [
  { id: 1, name: 'Маркетолог', status: 'active' },
  { id: 2, name: 'Управляющий', status: 'inactive' },
  { id: 3, name: 'Кассир', status: 'active' },
]

export default function RolesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [roles, setRoles] = useState<Role[]>(initialRoles)
  const [editingRole, setEditingRole] = useState<Role | null>(null)

  const handleCreateRole = (newRole: NewRole) => {
    const role: Role = {
      id: roles.length + 1,
      name: newRole.name,
      status: 'active'
    }
    setRoles([...roles, role])
  }

  const handleDeleteRole = (id: number) => {
    setRoles(roles.filter(role => role.id !== id))
  }

  const handleEditRole = (editedRole: Role) => {
    setRoles(roles.map(role => 
      role.id === editedRole.id ? editedRole : role
    ))
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Роли</h1>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          Создать роль
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Наименование роли</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.id}</TableCell>
              <TableCell>{role.name}</TableCell>
              <TableCell>
                <StatusBadge status={role.status} />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditingRole(role)}
                  className="mr-2"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteRole(role.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CreateRoleModal
        isOpen={isModalOpen || !!editingRole}
        onClose={() => {
          setIsModalOpen(false)
          setEditingRole(null)
        }}
        onSave={(roleData) => {
          if (editingRole) {
            handleEditRole({ ...editingRole, name: roleData.name })
            setEditingRole(null)
          } else {
            handleCreateRole(roleData)
          }
        }}
        initialData={editingRole}
      />
    </div>
  )
}

