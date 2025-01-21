import React from 'react'
import '../Navbar/navbar.css'
import { IoMdMenu } from "react-icons/io";



function Navbar() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <h1>Podca</h1>
        </div>
        <div className="menu-icon">
          <IoMdMenu/>
        </div>
      </div>

    </>
  )
}

export default Navbar