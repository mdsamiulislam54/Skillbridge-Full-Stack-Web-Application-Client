export type User = {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    createdAt: string; 
    updatedAt: string; 
    role: "TUTOR" | "STUDENT" | "ADMIN"; 
    phone: string | null;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED"; 
};
