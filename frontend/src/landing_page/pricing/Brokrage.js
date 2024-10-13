import React from "react";

const Brokrage = () => {
  return (
    <div className="container mt-5 mb-5">
      <h3 className="border-bottom lh-lg">Equity</h3>
      <div className="row mt-5 border">
        <div className="row py-1">
          <div className="col"></div>
          <div className="col">
            <p className="fs-5">Equity delivery</p>{" "}
          </div>
          <div className="col">
            <p className="fs-5">Equity intraday</p>{" "}
          </div>
          <div className="col">
            <p className="fs-5">F&O - Futures</p>{" "}
          </div>
          <div className="col">
            <p className="fs-5">F&O - Options</p>
          </div>
        </div>
        <hr />
        <div className="row text-muted py-1">
          <div className="col">
            <p>Brokerage</p>{" "}
          </div>
          <div className="col">
            <p>Zero Brokerage</p>{" "}
          </div>
          <div className="col">
            <p>0.03% or Rs. 20/executed order whichever is lower</p>{" "}
          </div>
          <div className="col">
            <p>0.03% or Rs. 20/executed order whichever is lower</p>{" "}
          </div>
          <div className="col">
            <p>Flat Rs. 20 per executed order</p>
          </div>
        </div>
        <div className="row text-muted bg-light py-1">
          <div className="col d-flex align-items-center">
            <p>STT/CTT </p>
          </div>
          <div className="col d-flex align-items-center">
            <p>0.1% on buy & sell </p>
          </div>
          <div className="col d-flex align-items-center">
            <p>0.025% on the sell side </p>
          </div>
          <div className="col d-flex align-items-center">
            <p>0.02% on the sell side</p>
          </div>
          <div className="col d-flex align-items-center">
            <ul>
              <li>
                0.0125% of the intrinsic value on options that are bought and
                exercised 0.1% on sell side (on premium)
              </li>
              <li>0.1% on sell side (on premium)</li>
            </ul>
          </div>
        </div>
        <div className="row text-muted py-1">
          <div className="col">
            <p>Transaction charges </p>
          </div>
          <div className="col">
            <p>NSE: 0.00297%</p>
            <p>BSE: 0.00375% </p>
          </div>
          <div className="col">
            <p>NSE: 0.00297%</p>
            <p>BSE: 0.00375% </p>
          </div>
          <div className="col">
            <p>NSE: 0.00173%</p>
            <p>BSE: 0 </p>
          </div>
          <div className="col">
            <p>NSE: 0.03503% (on premium)</p>
            <p>BSE: 0.0325% (on premium)</p>
          </div>
        </div>
        <div className="row text-muted bg-light py-1">
          <div className="col">
            <p>GST</p>
          </div>
          <div className="col">
            <p>18% on (brokerage + SEBI charges + transaction charges) </p>
          </div>
          <div className="col">
            <p>18% on (brokerage + SEBI charges + transaction charges) </p>
          </div>
          <div className="col">
            <p>18% on (brokerage + SEBI charges + transaction charges) </p>
          </div>
          <div className="col">
            <p>18% on (brokerage + SEBI charges + transaction charges)</p>
          </div>
        </div>
        <div className="row text-muted py-1">
          <div className="col">
            <p>SEBI charges </p>
          </div>
          <div className="col">
            <p>₹10 / crore </p>
          </div>
          <div className="col">
            <p>₹10 / crore </p>
          </div>
          <div className="col">
            <p>₹10 / crore </p>
          </div>
          <div className="col">
            <p>₹10 / crore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brokrage;
