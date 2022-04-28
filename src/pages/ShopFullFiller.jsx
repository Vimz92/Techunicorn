import Header from '../components/Header'
import HeroShop from '../components/HeroShop'
import Footer from '../components/Footer'
import Productsfilter from '../components/Productsfilter'
import Recommended from '../components/Recommended'
import Catergories from '../components/Catergories'



const ShopFullFiller = () => {
  return (
    <div>
    <Header />
    <HeroShop />
   
    <Productsfilter />
    <Catergories />
    <Recommended />
    <Footer />
    
  
     </div>
  )
}

export default ShopFullFiller