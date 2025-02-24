"use client"

import { useState } from "react"
import { Button } from "@/shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table"
import { Pencil, Trash2, Plus } from 'lucide-react'
import { SurveyDialog } from "./survey-dialog"

interface Survey {
  id: number
  name: string
}

export function SurveyTable() {
  const [surveys, setSurveys] = useState<Survey[]>([
    { id: 1, name: "Социальные сети" },
    { id: 2, name: "2ГИС" },
    { id: 3, name: "Рекомендация друга" },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingSurvey, setEditingSurvey] = useState<Survey | null>(null)

  const handleSave = (survey: Partial<Survey>) => {
    if (editingSurvey) {
      setSurveys(surveys.map(s => 
        s.id === editingSurvey.id ? { ...s, ...survey } : s
      ))
    } else {
      setSurveys([...surveys, {
        id: surveys.length + 1,
        name: survey.name || "",
      }])
    }
    setIsDialogOpen(false)
    setEditingSurvey(null)
  }

  const handleDelete = (id: number) => {
    setSurveys(surveys.filter(s => s.id !== id))
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-[#2B579A] hover:bg-[#1E3F7D]"
        >
          <Plus className="mr-2 h-4 w-4" />
          Создать опрос
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Наименование</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {surveys.map((survey) => (
            <TableRow key={survey.id}>
              <TableCell>{survey.id}</TableCell>
              <TableCell>{survey.name}</TableCell>
              <TableCell className="flex gap-2 justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingSurvey(survey)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(survey.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <SurveyDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        survey={editingSurvey}
        onSave={handleSave}
      />
    </div>
  )
}

