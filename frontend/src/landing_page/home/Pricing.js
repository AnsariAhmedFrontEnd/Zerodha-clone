import React from "react";
import LinkButton from "../../LinkButton";

const Pricing = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p className="mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <LinkButton>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </LinkButton>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col-4 border p-3 h-4">
              <h2>₹0</h2>
              <p> Free account opening</p>
            </div>
            <div className="col-4 border p-3">
              <h2>₹0</h2>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-4 border p-3">
              <h2>₹20</h2>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
