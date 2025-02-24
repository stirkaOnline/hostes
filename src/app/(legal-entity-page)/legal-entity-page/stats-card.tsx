interface StatsCardProps {
    averageVolume: string
    visitsCount: string
    totalSum: string
  }
  
  export function StatsCard({ averageVolume, visitsCount, totalSum }: StatsCardProps) {
    return (
      <div className="bg-[#2F5FE3] text-white rounded-xl p-6">
        <h3 className="text-lg mb-4">Данные:</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Средний объем:</span>
            <span className="font-medium">{averageVolume}</span>
          </div>
          <div className="flex justify-between">
            <span>Кол-во визитов:</span>
            <span className="font-medium">{visitsCount}</span>
          </div>
          <div className="flex justify-between">
            <span>Общая сумма:</span>
            <span className="font-medium">{totalSum}</span>
          </div>
        </div>
      </div>
    )
  }
  
  