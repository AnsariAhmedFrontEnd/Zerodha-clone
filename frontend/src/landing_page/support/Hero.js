import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid px-5 mb-5 pb-5"
      style={{ backgroundColor: "#387ed1", color: "white" }}
      id="supportWrapper"
    >
      <div className="d-flex flex-row justify-content-between mx-5 px-5 py-5">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>

      <div className="row mx-5 px-5">
        <div className="col-6">
          <h2 className="fs-4">Search for an answer or browse help topics to create a ticket</h2>
          <div className="mt-4">
            <input className="w-100 p-3 border-0 rounded" type="text" name="" id="" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
          </div>
          <div className="d-flex flex-wrap gap-4 mt-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h2 className="fs-4">Featured</h2>
          <ol className="mt-3">
            <li className="mb-3">
              <a href="">Surveillance measure on scrips - September 2024</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in September 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
