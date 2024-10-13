import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <h2 className="text-muted fs-4">
        To create a ticket, select a relevant topic
      </h2>
      <div className="row p-5">
        <div className="col-4">
          <h3 className="fs-5">
            <i className="fa-solid fa-circle-plus fa-xs me-2"></i>Account
            Opening
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Getting started
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Online
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Offline
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Charges Company, Partnership and HUF
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Non Resident Indian (NRI)
            </a>
          </div>
        </div>
        <div className="col-4">
          <h3 className="fs-5">
            <i className="fa-regular fa-user fa-xs me-2"></i>Your Zerodha
            Account
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Login credentials
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Your Profile
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Account modification and segment addition
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              CMR & DP ID
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Non Resident Indian (NRI)
            </a>
          </div>
        </div>
        <div className="col-4">
          <h3 className="fs-5">
            <i className="fa-solid fa-chart-simple fa-xs me-2"></i>Trading and Markets
          </h3>
          <div className="d-flex flex-column gap-3  p-3">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Trading FAQs
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Kite
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Margins
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Product and order types
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Corporate actions
            </a>
          </div>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-4 mb-5">
          <h3 className="fs-5">
            <i className="fa-solid fa-wallet fa-xs me-2"></i>Funds
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Fund withdrawal
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Adding funds
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Adding bank accounts
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              eMandates
            </a>
          </div>
        </div>
        <div className="col-4 mb-5">
          <h3 className="fs-5">
            <i className="fa-solid fa-record-vinyl fa-xs me-2"></i>Console
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              IPO
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Portfolio
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Funds statement
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Profile
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Reports
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Referral program
            </a>
          </div>
        </div>
        <div className="col-4 mb-5">
          <h3 className="fs-5">
            <i className="fa-solid fa-circle-notch fa-xs me-2"></i>Coin
          </h3>
          <div className="d-flex flex-column gap-3  p-3">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Understanding mutual funds and Coin
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Coin app
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Coin web
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Transactions and reports
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              National Pension Scheme (NPS)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
