import React from 'react'
import CarDetail from '../components/CarSpecs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { CarCard } from '../components/CarCard'
import { cars } from '../components/CarCard'

const CarDetails = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <CarDetail />
            <div className='flex flex-row font-bold justify-between mt-6 mb-4'>
                <div className='font-extrabold text-4xl flex '>Other Cars</div>
                <div className='flex items-center gap-1 text-sm text-gray-800 hover:text-gray-600' onClick={() => {
                    navigate('/cars')
                }}>View All <ChevronRight /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border border-dashed border-blue-300 rounded-2xl p-5 bg-white">
                {cars.map((car, idx) => (
                    <CarCard car={car} key={idx} />
                ))}
            </div>

            <Footer />
        </>
    )
}

export default CarDetails