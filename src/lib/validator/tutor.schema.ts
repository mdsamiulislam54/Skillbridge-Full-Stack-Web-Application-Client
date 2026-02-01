// lib/validators/tutor.schema.ts
import { profile } from "console"
import { z } from "zod"

export const tutorSchema = z.object({
  name: z.string().min(2, "Name is required"),
  bio: z.string().min(10),
  education: z.string(),
  experienceYears: z.string(),
  teachingMode: z.string(),
  languages: z.array(z.string()).min(1),
  isAvailable: z.boolean(),
  profileImage:z.string()
})

export type TutorFormValues = z.infer<typeof tutorSchema>
