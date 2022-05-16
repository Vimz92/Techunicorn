import Header from '../components/Header'
import HeroShop from '../components/HeroShop'
import Footer from '../components/Footer'
import Productsfilter from '../components/Productsfilter'
import Recommended from '../components/Recommended'
import CatergoryItem from '../components/CatergoryItem'
import Product from '../components/Product'



const ShopFullFiller = () => {
  return (
    <div>
    <Header />
    <HeroShop />
    <Product />
    <Productsfilter />

    <Recommended />
    <Footer />
    
  
     </div>
  )
}

export default ShopFullFiller