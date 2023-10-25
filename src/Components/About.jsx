import React from 'react'
import Header from './Header'

const About = () => {
  document.title = "About Page"
  return (
    <>
    <Header></Header>
    <div className='page about'>
      <h1>About</h1>
    </div>
    </>
  )
}

export default About
