import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeCourse from '../components/FreeCourse'
import Footer from '../components/Footer'

const home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <FreeCourse />
        <Footer />
    </>
  )
}

export default home