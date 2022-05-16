import Hero from '../components/Hero'
import Slider from '../components/Slider'
import BestSeller from '../components/BestSeller'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Discount from '../components/Discount'
import HomeProducts from '../components/HomeProducts'



const Home = () => {
  return (
    <div>

    <Header/>
    <Hero />
    <HomeProducts />
    <Slider />
   <Discount />
    <BestSeller />
    <Testimonials />
    <Footer />
    
    
  
     </div>
  )
}

export default Home