import React from 'react'
import { Footer, Navbar, Product } from "../components";
const AboutPage = () => { 
  return (
    <>
      <Navbar />

      {/* <div className="container">
              <h5 className="card-title fs-1 text fw-lighter fw-bold text-center">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block "> */}
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        
        {/* <p className="lead text-center"> */}
        Welcome to Salis International, your ultimate destination for high-quality shirts and jackets that blend style, comfort, 
        and durability. We are dedicated to providing our customers with a wide range of premium apparel designed to make you
         stand out in every setting—be it casual outings, formal events, or everyday wear.
         <br />
         <b>Why Choose Salis International?</b>

         <br />
 1: Unmatched Quality: Our garments are made from premium materials, ensuring durability and a luxurious <br />
 2: Innovative Designs: Stay ahead of fashion trends with our modern, sleek, and timeless designs. <br />
 3: Affordable Luxury: Experience high-end fashion without breaking the bank. <br />
 4: Customer Satisfaction: Your happiness is our priority. We focus on creating a seamless shopping experience, from browsing to delivery.
        {/* </p> */}

        {/* <h2 className="text-center py-4">Our Products</h2> */}
        <div className="row">
      <Product />
          </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage