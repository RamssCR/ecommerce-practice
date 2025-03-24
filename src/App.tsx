import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './views/Home'

export default function App() {
  return (
    <main className="w-full flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<h1>Category</h1>} />
          <Route path="/cart" element={<h1>Cart</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}