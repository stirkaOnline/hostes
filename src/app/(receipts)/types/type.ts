export interface ReceiptItem {
    id: number
    service: string
    price: number
    discount: number
    totalPrice: number
    quantity: number
    location: string
    fiscalRegistrator: string
  }
  
  export interface Receipt {
    id: number
    bekoNumber: number
    openedAt: string
    closedAt: string
    hasReturn: boolean
    cashier: string
    amount: number
    client: string
    fiscalRegistrator: string
    total: number
    items?: ReceiptItem[]
  }
  
  