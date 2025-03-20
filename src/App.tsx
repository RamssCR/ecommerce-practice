import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'

export default function App() {
  return (
    <main className="w-full flex flex-col items-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
        </Routes>
        {/* Footer goes here */}
      </BrowserRouter>
    </main>
  )
}