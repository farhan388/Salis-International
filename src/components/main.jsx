import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter fw-bold text-center">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Introducing Salis International Winter Jackets, where style meets comfort. Designed with precision and 
              tailored to meet client-specific demands, our jackets are crafted to keep you cozy in the 
              coldest winters. Made with premium materials, every piece is a perfect blend of 
              functionality and fashion, ensuring you stay warm without compromising on style. 
              Each jacket is specially made to order, fulfilling the unique requirements of our 
              clients—because at Salis International, we believe warmth should be personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
