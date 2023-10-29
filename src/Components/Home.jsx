import React from 'react'
import Header from './Header'
import Footer from './Footer/Footer'

const Home = () => {
  document.title = "Home Page"
  return (
    <>
    <Header></Header>
    <div className='page home'>
      <h1>Home</h1>
    </div>
    <Footer />
    </>
  )
}

export default Home
