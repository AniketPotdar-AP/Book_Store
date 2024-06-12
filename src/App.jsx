import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Contact from './components/Contact'
import About from './components/About'
import Course from './components/Course'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-800 dark:text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App