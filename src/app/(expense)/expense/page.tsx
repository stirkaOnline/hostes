import { ExpenseItemsTable } from "./components/expense-items-table"

export default function ExpenseItemsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Статьи расходов</h1>
      <ExpenseItemsTable />
    </div>
  )
}

