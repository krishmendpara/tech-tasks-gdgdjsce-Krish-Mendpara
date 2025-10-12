import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VehicleGroupSelector from '../components/VehicleGroupSelector'
import CarBrand from '../components/CarBrand'

const ViewCars = () => {
  return (
  <>
    <Navbar/>
    <VehicleGroupSelector/>
    <CarBrand/>
    <Footer/>
  </>
  )
}

export default ViewCars