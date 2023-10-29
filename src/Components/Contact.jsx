import React from 'react'
import Header from './Header'
import Footer from './Footer/Footer'

const Contact = () => {
  document.title = "Contact Page"
  return (
    <>
    <Header></Header>
    <div className='page contact'>
      <h1>Contact</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
