import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

import { AppContextProvider } from './context/AppContext.jsx'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollment'
import Educator from './pages/educator/Educator.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import AddCourse from './pages/educator/AddCourse.jsx'
import MyCourse from './pages/educator/MyCourse.jsx'
import StudenEnroll from './pages/educator/StudenEnroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      
        <Routes>
          {/* Default redirect to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollment" element={<MyEnrollment />} />
          <Route path="/player/:courseId" element={<MyEnrollment />} />
          <Route path="/loading/:path" element={<MyEnrollment />} />
             <Route path="/educator" element={<Educator />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourse />} />
            <Route path="student-enrolled" element={<StudenEnroll />} />
          </Route>
        </Routes>
    
    </BrowserRouter>
  </StrictMode>
)
