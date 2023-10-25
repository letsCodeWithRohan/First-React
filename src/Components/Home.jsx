import React from 'react'
import Header from './Header'

const Home = () => {
  document.title = "Home Page"
  return (
    <>
    <Header></Header>
    <div className='page home'>
      <h1>Home</h1>
    </div>
    </>
  )
}

export default Home
