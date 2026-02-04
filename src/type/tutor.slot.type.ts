// types/tutor-slot.type.ts
export type TutorSlot = {
  id: string
  tutorId: string
  startTime: string
  endTime: string
  duration: string
  teachingMode?: string
  maxStudent: number
  hourlyRate: number
  category: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  tutorProfile: {
    name: string
  }
}
