import React from "react";

const Hero = () => {
  return (
    <div className="continer border-bottom mb-5">
      <div className="row text-center mt-5">
        <h1 className="mb-4">Technology</h1>
        <h5 className="mb-4">Sleek, modern, and intuitive trading platforms</h5>
        <p className="text-muted mb-5">
          Check out our{" "}
          <a href="" style={{textDecoration:"none"}}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
