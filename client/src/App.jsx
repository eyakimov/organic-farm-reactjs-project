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
import ProductDetails from './components/products/details/ProductDetails'
import ProductCreate from './components/products/create/ProductCreate'
import ProductEdit from './components/products/edit/ProductEdit'
import { AuthContextProvider } from './contexts/AuthContextProvider'
import Logout from './components/logout/Logout'
import ProductsOwner from './components/products/owner/ProductsOwner'
import UserRoutes from './components/common/UserRoutes'
import { NotificationContextProvider } from './contexts/NotificationContextProvider'
import Notification from './components/common/Notification'

function App() {
  return (
    <AuthContextProvider>
      <NotificationContextProvider>
        <Header />
        <Notification />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route element={<UserRoutes />}>
            <Route path='/products/:productId/edit' element={<ProductEdit />} />
            <Route path='/products/create' element={<ProductCreate />} />
            <Route path='/products/owner' element={<ProductsOwner />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
        </Routes>
        <Footer />
      </NotificationContextProvider>
    </ AuthContextProvider>
  )
}

export default App
