import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img className="mb-5" src="media/images/homeHero.png" alt="hero" />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <button className="btn btn-primary btn-lg mt-2" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
};

export default Hero;
