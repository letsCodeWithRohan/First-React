import React from 'react'
import Header from './Header'
import Footer from './Footer/Footer'
import './Home.css'
import Home_Image from '../assets/undraw_experience_design_re_dmqq.svg'

const Home = () => {
  document.title = "Home Page"
  return (
    <>
    <Header></Header>
    <div className='page home'>
      <div className="left">
        <h1>Welcome To My Website</h1>
        <h3>I am Chaudhari Rohan</h3>
      </div>
      <div className="right">
        <img src={Home_Image} alt="" />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
