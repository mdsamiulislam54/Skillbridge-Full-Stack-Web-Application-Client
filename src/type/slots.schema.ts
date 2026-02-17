import { z } from "zod"

export const slotSchema = z.object({

  startTime: z.string().min(1, "Start time is required"),

  endTime: z.string().min(1, "End time is required"),

  duration: z
    .string()
    .min(1, "Duration required"),

  teachingMode: z
    .string()
    .min(1, "Teaching mode required"),

  maxStudent: z.coerce
    .number()
    .min(1, "Minimum 1 student"),

  category: z
    .string()
    .min(1, "Category required"),

  hourlyRate: z.coerce
    .number()
    .min(1, "Hourly rate required"),

  isActive: z.boolean()

})
