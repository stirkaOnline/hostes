'use client'

import { useState } from 'react'
import { Button } from "../../../shared/ui/button"
import { CategoryFilters } from '../../../components/category-filter'
import { ServicesTable } from '../../../components/service-table'
import { CreateServiceModal } from '../../../components/create-service.modal'
import { Service, ServiceCategory } from '../../../types/service'
import { Plus } from 'lucide-react'

const sampleServices: Service[] = [
  {
    id: 1,
    name: 'Биочистка',
    basePrice: 1000,
    markup: 15,
    totalPrice: 1150,
    status: 'active'
  },
  {
    id: 2,
    name: 'Биочистка',
    basePrice: 1000,
    markup: 15,
    totalPrice: 1150,
    status: 'inactive'
  },
  {
    id: 3,
    name: 'Биочистка',
    basePrice: 1000,
    markup: 15,
    totalPrice: 1150,
    status: 'active'
  },
  {
    id: 4,
    name: 'Биочистка',
    basePrice: 0,
    markup: 0,
    totalPrice: 0,
    status: 'active'
  },
]

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(sampleServices)
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log('Edit service:', id)
  }

  const handleDelete = (id: number) => {
    setServices(services.filter(service => service.id !== id))
  }

  const handleCreateService = (newService: Omit<Service, 'id'>) => {
    const serviceWithId: Service = {
      ...newService,
      id: services.length + 1 // This is a simple way to generate an ID. In a real app, you'd use a more robust method.
    }
    setServices([...services, serviceWithId])
  }

  return (
      <div className="p-6 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Услуги</h1>
          <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-blue-700 hover:bg-blue-800"
          >
            <Plus className="mr-2 h-4 w-4" /> Создать услугу
          </Button>
        </div>

        <CategoryFilters
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
        />

        <ServicesTable
            services={services}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />

        <div className="mt-6">
          <Button variant="default" className="bg-blue-700 hover:bg-blue-800">
            Сохранить
          </Button>
        </div>

        <div className="flex justify-center mt-6 gap-1">
          {[1, 2, 3, '...', 35, 36].map((page, index) => (
              <Button
                  key={index}
                  variant={page === 2 ? 'default' : 'ghost'}
                  className={page === 2 ? 'bg-blue-700' : ''}
                  size="icon"
              >
                {page}
              </Button>
          ))}
        </div>

        <CreateServiceModal
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onCreateService={handleCreateService}
        />
      </div>
  )
}

