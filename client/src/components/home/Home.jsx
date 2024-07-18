import About from "../about/About";
import Banner from "./Banner";
import Carousel from "./Carousel";

export default function Home(){
  return (
    <>
      <Carousel />
      <Banner />
      <About />
    </>
  )
}