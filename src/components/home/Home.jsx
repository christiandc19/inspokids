import React from 'react'
import Logo from '../../assets/Logo.png'
import './home.css'

function Home() {
  return (
    <div>
      <div className='container logo-container'>
      <h1>Welcome!</h1>
      <img src={Logo} alt="" />
      </div>


    </div>
  )
}

export default Home
