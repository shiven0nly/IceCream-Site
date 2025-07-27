'use client'
import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Lenis from 'lenis'
import Testimonial from './components/Testimonial';
import Footer from './components/Footer'


function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])
  


  return (
    <>
   <Hero />
   <Testimonial />
   <Footer />
    </>
  )
}

export default App
