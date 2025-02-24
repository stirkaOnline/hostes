import { WarehouseTable } from "./components/wirehouse-table"

export default function WarehousePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Склады</h1>
      <WarehouseTable />
    </div>
  )
}

