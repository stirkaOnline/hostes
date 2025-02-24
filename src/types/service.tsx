export interface Service {
    id: number
    name: string
    basePrice: number
    markup: number
    totalPrice: number
    status: 'active' | 'inactive'
}

export type ServiceCategory =
    | 'Кожа'
    | 'Повседневная одежда'
    | 'Мех'
    | 'Домашний текстиль'
    | 'Сумки'
    | 'Прачечные услуги'

