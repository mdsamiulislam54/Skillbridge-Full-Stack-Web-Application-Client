'use client'
import { Spinner } from '@/components/ui/spinner'
const loading = () => {
    return (
        <div className='flex flex-col min-h-screen w-full justify-center items-center'>
            <Spinner width={100} />
        </div>
    )
}

export default loading