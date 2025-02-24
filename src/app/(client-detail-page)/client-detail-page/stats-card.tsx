export function StatsCard() {
    return (
      <div className="bg-[#2F5FE3] text-white rounded-xl p-6">
        <h3 className="text-lg mb-4">Данные:</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Средний чек:</span>
            <span className="font-medium">1 590 ₽</span>
          </div>
          <div className="flex justify-between">
            <span>Кол-во визитов:</span>
            <span className="font-medium">23</span>
          </div>
          <div className="flex justify-between">
            <span>Общая сумма:</span>
            <span className="font-medium">36 789 ₽</span>
          </div>
        </div>
      </div>
    )
  }
  
  