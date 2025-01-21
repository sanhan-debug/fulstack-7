import React from 'react'
import '../Gallery/gallery.css'

function Gallery() {
  return (
   <>
   <h1 style={{textAlign:'center',margin:'40px'}}>Behind The Mic</h1>
   <div className="gallery-container">
    <div className="images">
    <img src="https://preview.colorlib.com/theme/podca/images/person_1.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/podca/images/person_2.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/podca/images/person_3.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/podca/images/person_4.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/podca/images/person_5.jpg" alt="" />
    <img src="https://preview.colorlib.com/theme/podca/images/person_6.jpg" alt="" />
    </div>
   </div>
   </>
  )
}

export default Gallery