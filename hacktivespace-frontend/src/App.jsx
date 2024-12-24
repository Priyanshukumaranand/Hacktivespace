import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Programs from './components/Programs/Programs'
import Blogs from './components/Blogs/Blogs'
import ResearchAreas from './components/ResearchAreas/ResearchAreas'
import OurWork from './components/OurWork/OurWork'
import WhoWeAre from './components/WhoWeAre/WhoWeAre'
function App() {
  return (
    <>
      <Header />
      
      <Home/>
      {/* <WhoWeAre/> */}
      {/* <ResearchAreas/> */}
      {/* <OurWork/> */}
      {/* <Programs/> */}
      {/* <Blogs/> */}

      <Footer/>
    </>
  )
}

export default App
