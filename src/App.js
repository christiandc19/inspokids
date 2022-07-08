import React from "react";
import Navbar from './components/Navbar'
import Logo from './assets/Logo.png'
import './index.css'


function App() {
  return (
    <>
    <div class="bg-home">

            <div className=" home_header">
            <img src={Logo} alt="" /> 
            <h3>+1 (818)272-1022</h3>
            </div>

            <Navbar />
    </div>
    </>
  );
}

export default App;
