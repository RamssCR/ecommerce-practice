import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './views/Home'
import Products from './views/Products'

export default function App() {
  return (
    <main className="w-full flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}