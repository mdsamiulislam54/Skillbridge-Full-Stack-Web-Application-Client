'use client'
import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const loading = () => {
    return (
        <div className='flex flex-col h-full w-full justify-center items-center'>
            <Spinner />
        </div>
    )
}

export default loading