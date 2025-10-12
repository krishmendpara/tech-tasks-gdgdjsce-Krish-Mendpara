
import './App.css'
import Home from './page/Home'
import { Routes,Route } from 'react-router-dom'
import ViewCars from './page/ViewCars'
import CarDetail from './components/CarSpecs'
import CarDetails from './page/CarDetails'
import AboutUs from './page/AboutUs'
import ContactUs from './page/ContactUs'


function App() {


  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path='/cars' element={<ViewCars/>}/>
     <Route path='/specs' element={<CarDetail/>}/>
     <Route path='/details'element={<CarDetails/>}/>
     <Route path='/aboutus' element={<AboutUs/>}/>
     <Route path='/contactus' element={<ContactUs/>}/>
  </Routes>
    </>
  )
}

export default App
