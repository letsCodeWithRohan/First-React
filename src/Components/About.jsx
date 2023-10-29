import React from 'react'
import Header from './Header'
import Footer from './Footer/Footer'

const About = () => {
  document.title = "About Page"
  return (
    <>
    <Header></Header>
    <div className='page about'>
      <h1>About</h1>
    </div>
    <Footer />
    </>
  )
}

export default About
