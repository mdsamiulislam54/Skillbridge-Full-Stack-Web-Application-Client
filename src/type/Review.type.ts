export type Review = {
    id: string
    userId: string
    tutorProfileId: string
    bookingId?: string | null

    comment: string
    rating: number

    createdAt: string | Date

}

export type ReviewForm = {
    rating: number,
    comment: string
    tutorProfileId: string
    bookingId?: string 
}
