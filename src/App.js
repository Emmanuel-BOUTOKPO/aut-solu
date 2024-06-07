import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Detail from './pages/detail/Detail';
import Cart from './pages/cart/Cart';
import Checkout from './component/checkout/Checkout';
import About from './pages/about/About';
import Contact from './pages/cont/Contact';
import Dash from './admin/dashboard/Dash';
import Login from './admin/auth/login/Login';
import Register from './admin/auth/register/Register';
import Commande from './admin/commande/Commande';
import Brand from './admin/brand/Brand';
import Product from './admin/product/Product';
import Catef from './admin/cat/Catef';
import Thank from './pages/thank/Thank';

function App() {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/admin' element={<Dash />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/position' element={<Catef />} />
        <Route exact path='/commande' element={<Commande />} />
        <Route exact path='/brand' element={<Brand />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/thank' element={<Thank />} />
      </Routes>
    </Router>


  </>
  );
}

export default App;
