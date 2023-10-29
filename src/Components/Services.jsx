import React from 'react'
import Header from './Header'
import Footer from './Footer/Footer'
const Services = () => {
  document.title = "Services Page"
  return (
    <>
    <Header></Header>
    <div className='page services'>
      <h1>Services</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Services
