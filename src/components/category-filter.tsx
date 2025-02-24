'use client'

import React from 'react'
import { ServiceCategory } from '../types/service'

interface CategoryFiltersProps {
    selectedCategory: ServiceCategory | null
    onSelectCategory: (category: ServiceCategory | null) => void
}

const categories: ServiceCategory[] = [
    'Кожа',
    'Повседневная одежда',
    'Мех',
    'Домашний текстиль',
    'Сумки',
    'Прачечные услуги'
]

export function CategoryFilters({ selectedCategory, onSelectCategory }: CategoryFiltersProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(selectedCategory === category ? null : category)}
                    className={`px-4 py-2 rounded-full text-sm ${
                        selectedCategory === category
                            ? 'bg-blue-700 text-white'
                            : 'border border-blue-700 text-blue-700'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

