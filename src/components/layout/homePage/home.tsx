import React from 'react'


import TutorProfile from './TutorProfile/TutorProfile'
import { Hero } from './hero/hero'
import Support from './Support/Support'
import FAQPage from './Faq/Faq'
import StudentFeedbackPage from './StudentFeedback/StudentFeedback'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <TutorProfile />
      <Support />
      <FAQPage/>
      <StudentFeedbackPage/>
      
    </div>
  )
}

export default HomePage