
import './App.css'
import Home from './page/Home'
import { Routes,Route } from 'react-router-dom'
import ViewCars from './page/ViewCars'


function App() {


  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path='/cars' element={<ViewCars/>}/>
  </Routes>
    </>
  )
}

export default App
