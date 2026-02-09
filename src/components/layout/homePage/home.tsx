import React from 'react'


import TutorProfile from './TutorProfile/TutorProfile'
import { Hero } from './hero/hero'

const HomePage = () => {
  return (
    <div className='px-4'>
        <Hero/>
        <TutorProfile/>
    </div>
  )
}

export default HomePage