'use client'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Review } from '@/type/Review.type'
import { Star } from 'lucide-react'
import React from 'react'


type Props = {
    review: Review
}
const ReviewsCard = ({review}:Props) => {
    return (
        <Card className='p-4'>
            <CardTitle className='flex justify-between items-center '>Review <span className='flex items-center gap-2 text-2xl font-bold'><Star />{review.rating}</span> </CardTitle>

            <CardDescription className='border p-2 rounded-2xl'>
                {review.comment}
            </CardDescription>
        </Card>
    )
}

export default ReviewsCard