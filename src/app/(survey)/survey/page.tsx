import { SurveyTable } from "./components/survey-table"

export default function SurveysPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Опрос клиентов</h1>
      <SurveyTable />
    </div>
  )
}