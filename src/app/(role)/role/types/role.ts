export interface Role {
    id: number
    name: string
    status: 'active' | 'inactive'
  }
  
  export interface Permission {
    sectionId: number
    write: boolean
    read: boolean
    noAccess: boolean
  }
  
  export interface NewRole {
    name: string
    permissions: Permission[]
  }