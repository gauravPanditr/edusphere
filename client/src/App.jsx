import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollment'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetails />}/>
        <Route path='/my-enrollment' element={<MyEnrollment />}/>
         <Route path='/player/:courseId' element={<MyEnrollment />}/>
          <Route path='/loading/:path' element={<MyEnrollment />}/>
        
      </Routes>
    </div>
  )
}

export default App
