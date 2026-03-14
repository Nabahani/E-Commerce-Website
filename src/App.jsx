import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-light min-vh-100'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  )
}
export default App