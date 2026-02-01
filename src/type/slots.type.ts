export type SlotsType = {     
  startTime: string  
  endTime:string
  duration: string   
  teachingMode: string
  maxStudent: number
  isActive: boolean
  tutorId: string | undefined
  category: string
  hourlyRate: number
}

export type UpdateSlotsType = {     
  startTime: string  
  endTime:string
  duration: string   
  teachingMode: string
  maxStudent: number
  isActive: boolean
  category: string
  hourlyRate: number
}
