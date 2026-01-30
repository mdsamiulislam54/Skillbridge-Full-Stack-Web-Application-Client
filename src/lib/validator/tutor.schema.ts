// lib/validators/tutor.schema.ts
import { z } from "zod"

export const tutorSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(10),
  education: z.string(),
  experienceYears: z.string(),
  hourlyRate: z.number().min(0),
  teachingMode: z.string(),
  categories: z.array(z.string()).min(1),
  languages: z.array(z.string()).min(1),
  sessionDuration: z.number().optional(),
  isAvailable: z.boolean(),
})

export type TutorFormValues = z.infer<typeof tutorSchema>
