import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CarBrand from '../components/CarBrand'
import BookCar from '../components/Booking'
import InfoStrip from '../components/Contacts'
import BlogNewsSection from '../components/News'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
  const navigate = useNavigate()
  return (
    <>
    <Navbar/>
    <div className='mt-7'>
      <div className='font-extrabold text-4xl'>
        Contact Us
      </div>
      <div className='mt-2'>
        <span className='opacity-50'  onClick={()=>{
          navigate('/')
        }} >Home /</span> Contact Us
      </div>
    </div>
    <BookCar/>
    <InfoStrip/>
    <BlogNewsSection/>
    <CarBrand/>
    <Footer/>
    </>
  )
}

export default ContactUs