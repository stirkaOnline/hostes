import { PositionsTable } from "./position-table"

export default function PositionsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Должности</h1>
      <PositionsTable />
    </div>
  )
}