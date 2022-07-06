import React from "react";
import Navbar from './components/Navbar'
import Logo from './assets/Logo.jpg'
import './index.css'


function App() {
  return (
    <>
            <div className="home_header">
            <img src={Logo} alt="" /> 
            <h1>+1 (818)272-1022</h1>
            </div>

            <Navbar />
    </>
  );
}

export default App;
