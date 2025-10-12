import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturesHighlight from '../components/Praise'
import VideoHero from '../components/Video'
import MemoriesSection from '../components/Memories'
import DownloadAppSection from '../components/DowloadApp'
import ReviewsSection from '../components/Reviews'
import FAQSection from '../components/Questions'
import Poster from '../components/Poster'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
      <div className='mt-7'>
      <div className='font-extrabold text-4xl'>
        About Us
      </div>
      <div className='mt-2'>
        <span className='opacity-50' onClick={()=>{
          navigate('/')
        }} >Home /</span> About Us
      </div>
    </div>
    <FeaturesHighlight/>
    <VideoHero/>
      <div className="flex flex-col md:flex-row justify-around items-center gap-12 py-8 bg-white">
      
      <div className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-[#6D48E0] mb-1">20k+</span>
        <span className="font-bold text-sm text-black">Happy customers</span>
      </div>
 
      <div className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-[#6D48E0] mb-1">540+</span>
        <span className="font-bold text-sm text-black">Count of cars</span>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-5xl font-extrabold text-[#6D48E0] mb-1">25+</span>
        <span className="font-bold text-sm text-black">Years of experince</span>
      </div>
    </div>
    <MemoriesSection/>
    <DownloadAppSection/>
    <ReviewsSection/>
    <FAQSection/>
    <Poster/>
    <Footer/>
    </>
  )
}

export default AboutUs