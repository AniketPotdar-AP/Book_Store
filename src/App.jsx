import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Contact from './components/Contact'
import About from './components/About'
import Course from './components/Course'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (
    <>
      <div className='dark:bg-slate-800 dark:text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Course /> : <Navigate to={"/signup"} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </>
  )
}

export default App