import About from './components/About'
import './App.css'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Products from './components/Products'
import TopBar from './components/TopBar'

function App(){
  return (
    <>
      <TopBar />
      <NavBar />
      <Carousel />
      <Banner />
      <About />
      <Products />
      <Footer />
    </>
  )
}

export default App
