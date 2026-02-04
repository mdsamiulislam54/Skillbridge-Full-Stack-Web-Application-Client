export type TutorProfile = {
    id: string;
    userId: string;
    name: string;
    bio: string;
    education: string;
    experienceYears: string;
    teachingMode: "ONLINE" | "OFFLINE";
    isAvailable: boolean;
    approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
    averageRating: number;
    profileImage: string;
    languages: string[];
    createdAt: string;
    updatedAt: string;

    tutorSlots: TutorSlot[];
    reviews: Review[];
};
export type TutorSlot = {
    id: string;
    tutorId: string;
    startTime: string; 
    endTime: string;  
    duration: string; 
    teachingMode: "ONLINE" | "OFFLINE";
    maxStudent: number;
    hourlyRate: number;
    category: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string; 
};
export type Review = {
    id: string;
    rating: number;
    comment: string;
    userId: string;
    createdAt: string;
};
