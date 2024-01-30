
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Offer from './Components/Assets/offerbanner2.jpg';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      

      <Routes>
        <Route path='/' element= {<Shop/>} />
        <Route path='/Mens' element = {<ShopCategory banner={Offer} category = "men"/>} />
        <Route path='/womens' element = {<ShopCategory banner={Offer}  category = "women"/>} />
        <Route path='/kids' element = {<ShopCategory banner={Offer} category = "kid"/>} />

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
       

        
      </Routes>
      <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
