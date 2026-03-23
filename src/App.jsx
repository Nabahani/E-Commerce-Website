import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/ProductDetails'
import CartProvider from './context/CartContext'

function App() {
  return (
    <div className='bg-light min-vh-100'>
      <AuthProvider>
        <CartProvider>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}
export default App