export interface CollectionOperation {
    id: number
    bekoNumber: number
    datetime: string
    operationType: 'Инкассация'
    employee: string
    amount: number
    cashAmount: number
    location: string
    fiscalRegistrator: string
    comments: string | null
    cashShift: number
    status?: string
    revenue?: number
    cost?: number
    receiptCount?: number
  }
  
  