import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Header from './components/header/Header'

function App() {
  return (
    <>      
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
