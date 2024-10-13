import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5 text-center mx-5">
        <div className="col-4 p-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>
      <div className="row mt-3 text-center mx-5">
        <div className="col-4 p-4">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="row">

      <button className="btn btn-primary btn-lg mt-2 mb-5 mx-auto" style={{width:"20%"}}>Signup Now</button>
      </div>
    </div>
  );
};

export default Universe;
