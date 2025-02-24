import { CitiesTable } from "./components/cities-table"

export default function CitiesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Города</h1>
      <CitiesTable />
    </div>
  )
}