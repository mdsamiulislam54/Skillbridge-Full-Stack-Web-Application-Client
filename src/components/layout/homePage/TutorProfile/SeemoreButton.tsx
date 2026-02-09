"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


const SeemoreButton = () => {
    const router = useRouter()

    return (
        <Button className='cursor-pointer' onClick={() => {
            router.push('/tutor')
        }}>See More</Button>
    )
}

export default SeemoreButton