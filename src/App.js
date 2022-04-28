import Home from './pages/Home';
import ShopFullWidth from './pages/ShopFullWidth';
import ShopFullFiller from './pages/ShopFullFiller';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Catergories from './components/Catergories'
import Apinew from './pages/Apinew'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div> 
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<ShopFullFiller/>}/>
    <Route path="/shopdetails" element={<ShopFullWidth/>}/>
    <Route path="/addtocart" element={<Detail/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/category" element={<Catergories/>}/>
    <Route path="/categories" element={<Apinew/>}/>
    <Route path="/login" element={<Login/>}/>

    </Routes>



  </div>
  )
  
}

export default App;
