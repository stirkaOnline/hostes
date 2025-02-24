'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../shared/ui/dialog"
import { Button } from "../shared/ui/button"
import { Input } from "../shared/ui/input"
import { Label } from "../shared/ui/label"
import { Service } from '../types/service'

interface CreateServiceModalProps {
    isOpen: boolean
    onClose: () => void
    onCreateService: (service: Omit<Service, 'id'>) => void
}

export function CreateServiceModal({ isOpen, onClose, onCreateService }: CreateServiceModalProps) {
    const [name, setName] = useState('')
    const [basePrice, setBasePrice] = useState('')
    const [markup, setMarkup] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newService: Omit<Service, 'id'> = {
            name,
            basePrice: Number(basePrice),
            markup: Number(markup),
            totalPrice: Number(basePrice) * (1 + Number(markup) / 100),
            status: 'active'
        }
        onCreateService(newService)
        onClose()
        // Reset form
        setName('')
        setBasePrice('')
        setMarkup('')
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Создать новую услугу</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Название
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="basePrice" className="text-right">
                                Базовая цена
                            </Label>
                            <Input
                                id="basePrice"
                                type="number"
                                value={basePrice}
                                onChange={(e) => setBasePrice(e.target.value)}
                                className="col-span-3"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="markup" className="text-right">
                                Наценка (%)
                            </Label>
                            <Input
                                id="markup"
                                type="number"
                                value={markup}
                                onChange={(e) => setMarkup(e.target.value)}
                                className="col-span-3"
                                required
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Создать услугу</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

