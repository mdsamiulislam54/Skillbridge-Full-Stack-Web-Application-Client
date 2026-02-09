import React from 'react'


import TutorProfile from './TutorProfile/TutorProfile'
import { Hero } from './hero/hero'
import Support from './Support/Support'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <TutorProfile />
      <Support />
    </div>
  )
}

export default HomePage