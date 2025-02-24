export interface Customer {
    id?: string
    lastName: string
    firstName: string
    middleName: string
    gender: "M" | "F"
    birthDate?: string
    phone: string
    email?: string
    city: string
    street?: string
    house?: string
    apartment?: string
    registrationDate: string
  }
  
  export interface Service {
    id: string
    name: string
    price: number
    quantity: number
    size?: string
    brand?: string
    color?: string
    photo?: string
    technicalPassport?: boolean
    readyDate?: string
  }
  
  export interface Order {
    customer: Customer
    services: Service[]
    paymentMethod: "cash" | "card"
    promoCode?: string
    referralSource: string
    total: number
    comment?: string
  }
  
  