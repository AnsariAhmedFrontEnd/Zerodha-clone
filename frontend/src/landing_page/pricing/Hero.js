import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center border-bottom">
        <h1>Charges</h1>
        <h5 className="text-muted mt-3 mb-5">List of all charges and taxes</h5>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" alt="" />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" alt="" />
          <h3>Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
