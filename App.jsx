import './App.css'
import Homepage from './pages/homepage/Homepage'
import Signup from './pages/authentication/general-signup/Signup'
import EmployerSignup from './pages/authentication/signup-pages/EmployerSignup'
import JobSeekerSignup from './pages/authentication/signup-pages/JobSeekerSignup'
import Employer from './pages/authentication/login-pages/Employer'
import JobSeeker from './pages/authentication/login-pages/JobSeeker'
import { Routes, Route } from 'react-router-dom'
import JobPost from './pages/job-post/JobPost'
import Profile from './pages/jobseeker-profile/Profile'
import Contact from './pages/contact-us/contact'

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/signup/employer' element={<EmployerSignup />} />
        <Route exact path='/signup/jobseeker' element={<JobSeekerSignup />} />
        <Route exact path='/jobsboard/:jobId' element={<JobPost />} />
        <Route exact path='/login/employer' element={<Employer />} />
        <Route exact path='/login/jobseeker' element={<JobSeeker />} />
        <Route exact path='/jobseeker/profile' element={<Profile />} />
        <Route exact path='/contact-page/' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
