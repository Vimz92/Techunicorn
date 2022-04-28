import Header from '../components/Header'
import HeroShop from '../components/HeroShop'
import Discount from '../components/Discount'
import Footer from '../components/Footer'
import Productsfilter from '../components/Productsfilter'
import Recommended from '../components/Recommended'



const ShopFullWidth = () => {
  return (
    <div>
    <Header />
     <HeroShop />
    <Productsfilter />
    <Discount />
    <Recommended />
    <Footer />
    
  
     </div>
  )
}

export default ShopFullWidth