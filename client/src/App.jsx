import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollment'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourse from './pages/educator/MyCourse'
import StudenEnroll from './pages/educator/StudenEnroll'

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
          <Route path='/educator' element={<Educator/>}/>
          <Route path='/educator' element={<Dashboard/>}/>
          <Route path='add-course' element={<AddCourse/>}/>
          <Route path='my-course' element={<MyCourse/>}/>
          <Route path='student-enrolled' element={<StudenEnroll/>}/>
        
      </Routes>
    </div>
  )
}

export default App
