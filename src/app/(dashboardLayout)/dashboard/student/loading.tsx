'use client'
import { Spinner } from '@/components/ui/spinner'
import React from 'react'

const loading = () => {
    return (
        <div className='flex flex-col min-h-screen w-full justify-center items-center'>
            <Spinner fontSize={30}/>
            
        </div>
    )
}

export default loading