import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import { IoCloudDone } from "react-icons/io5";

const Thank = () => {
  return (
    <>
       <Navbar/>
          <div className="card a" style={{margin : "5rem", textAlign : "center", fontSize : '3rem'}}>
             <IoCloudDone /> 
             <p>Votre commande a été reçue </p> 
              <p>Merci à vous !</p>
          </div>
       <Footer/>
    </>
  )
}

export default Thank
