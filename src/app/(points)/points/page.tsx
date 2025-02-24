import { PointsTable } from "./components/points-table"

export default function PointsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Точки</h1>
      <PointsTable />
    </div>
  )
}