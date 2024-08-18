import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/blog-hero/Hero'
import Cards from '../components/blog-cards/Cards'
import Footer from '../components/footer/Footer'


const Blog = () => {

  return (
    <>
        <Navbar/>
        <Hero/>
        <Cards/>
        <Footer/>
    </>
  )
}

export default Blog