import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AfterHero from '../components/AfterHero'
import FeatureListSection from '../components/FeatureList'
import CarGridSection from '../components/CarCard'
import FactsInNumbersSection from '../components/FactsInNumber'
import DownloadAppSection from '../components/DowloadApp'
import CarSearchSection from '../components/carSearch'
import Footer from '../components/Footer'


function Home() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <AfterHero />
      <FeatureListSection />
      <CarGridSection />
      <FactsInNumbersSection/>
      <DownloadAppSection/>
      <CarSearchSection/>
      <Footer/>
    </>
  )
}

export default Home
