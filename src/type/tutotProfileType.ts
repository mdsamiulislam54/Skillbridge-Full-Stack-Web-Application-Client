export type TutorProfileFormData = {
  bio: string
  categories: string[]
  coverImage: string
  education: string
  experienceYears: string
  hourlyRate: number
  isAvailable: boolean
  languages: string[]
  name: string
  profileImage: string
  sessionDuration?: number
  teachingMode: string
}


export type TutorFormValues = {
    name: string;
    bio: string;
    education: string;
    experienceYears: string;
    teachingMode: string;
    isAvailable: boolean;
    languages: string[];
    profileImage?: string 
}
