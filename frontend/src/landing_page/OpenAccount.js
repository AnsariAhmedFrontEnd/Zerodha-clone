import React from "react";

const OpenAccount = () => {
  return (
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h2 className="mb-4">Open a Zerodha account</h2>
          <p className="text-muted mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary btn-lg mt-2"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
  );
};

export default OpenAccount;
