"use client"

import { ChevronDown, Filter, X } from 'lucide-react'
import * as React from "react"

import { Button } from "@/shared/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/shared/ui/collapsible"

const filterOptions = [
    ["Клиенты", "Количество продаж", "Город"],
    ["Количество чеков", "Дата и время продажи", "Торговая точка"],
    ["Кассир", "Сумма продаж наличные", "Сумма продажи безналичные"],
    ["Юридические лица", "Физические лица", "Сумма скидки"],
    ["Чеков итого", "Услуги", "Средний чек"],
    ["Ед.измерения", "Номенклатура", "Сумма продажи", "Категория услуги"],
]

export function ReportFilters({
                                  onGenerate,
                              }: {
    onGenerate: (filters: string[]) => void
}) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedFilters, setSelectedFilters] = React.useState<string[]>([])

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="rounded-lg border bg-[#1e56aa] text-white"
        >
            <div className="flex items-center justify-between px-4 py-2">
                <CollapsibleTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hover:bg-white/20 hover:text-white"
                    >
                        <Filter className="mr-2 h-4 w-4" />
                        Фильтры
                        <ChevronDown
                            className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </Button>
                </CollapsibleTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/20 hover:text-white"
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <CollapsibleContent className="space-y-4 px-4 pb-4">
                <div className="grid grid-cols-3 gap-4">
                    {filterOptions.map((group, i) => (
                        <div key={i} className="space-y-2">
                            {group.map((filter) => (
                                <label
                                    key={filter}
                                    className="flex items-center space-x-2 rounded p-2 hover:bg-white/10"
                                >
                                    <input
                                        type="checkbox"
                                        className="rounded border-white/50"
                                        checked={selectedFilters.includes(filter)}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedFilters([...selectedFilters, filter])
                                            } else {
                                                setSelectedFilters(
                                                    selectedFilters.filter((f) => f !== filter)
                                                )
                                            }
                                        }}
                                    />
                                    <span>{filter}</span>
                                </label>
                            ))}
                        </div>
                    ))}
                </div>
                <Button
                    className="w-auto bg-white text-[#1e56aa] hover:bg-white/90"
                    onClick={() => onGenerate(selectedFilters)}
                >
                    Сгенерировать отчет
                </Button>
            </CollapsibleContent>
        </Collapsible>
    )
}