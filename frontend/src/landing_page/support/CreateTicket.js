import React from "react";
import LinkButton from "../../LinkButton";

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
            <LinkButton>Getting started</LinkButton>
            <LinkButton>Online</LinkButton>
            <LinkButton>Offline</LinkButton>
            <LinkButton> Charges Company, Partnership and HUF</LinkButton>
            <LinkButton> Non Resident Indian (NRI)</LinkButton>
          </div>
        </div>
        <div className="col-4">
          <h3 className="fs-5">
            <i className="fa-regular fa-user fa-xs me-2"></i>Your Zerodha
            Account
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <LinkButton>Login credentials</LinkButton>
            <LinkButton>Your Profile</LinkButton>
            <LinkButton>Account modification and segment addition</LinkButton>
            <LinkButton>CMR & DP ID</LinkButton>
            <LinkButton>Nomination</LinkButton>
            <LinkButton>Transfer and conversion of shares</LinkButton>
          </div>
        </div>
        <div className="col-4">
          <h3 className="fs-5">
            <i className="fa-solid fa-chart-simple fa-xs me-2"></i>Trading and
            Markets
          </h3>
          <div className="d-flex flex-column gap-3  p-3">
            <LinkButton>Trading FAQs</LinkButton>
            <LinkButton>Kite</LinkButton>
            <LinkButton>Margins</LinkButton>
            <LinkButton>Product and order types</LinkButton>
            <LinkButton>Corporate actions</LinkButton>
            <LinkButton>Kite features</LinkButton>
          </div>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-4 mb-5">
          <h3 className="fs-5">
            <i className="fa-solid fa-wallet fa-xs me-2"></i>Funds
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <LinkButton>Fund withdrawal</LinkButton>
            <LinkButton>Adding funds</LinkButton>
            <LinkButton>Adding bank accounts</LinkButton>
            <LinkButton>eMandates</LinkButton>
          </div>
        </div>
        <div className="col-4 mb-5">
          <h3 className="fs-5">
            <i className="fa-solid fa-record-vinyl fa-xs me-2"></i>Console
          </h3>
          <div className="d-flex flex-column gap-3 p-3">
            <LinkButton>IPO</LinkButton>
            <LinkButton>Portfolio</LinkButton>
            <LinkButton>Funds statement</LinkButton>
            <LinkButton>Profile</LinkButton>
            <LinkButton>Reports</LinkButton>
            <LinkButton>Referral program</LinkButton>
          </div>
        </div>
        <div className="col-4 mb-5">
          <h3 className="fs-5">
            <i className="fa-solid fa-circle-notch fa-xs me-2"></i>Coin
          </h3>
          <div className="d-flex flex-column gap-3  p-3">
            <LinkButton>Understanding mutual funds and Coin</LinkButton>
            <LinkButton>Coin app</LinkButton>
            <LinkButton>Coin web</LinkButton>
            <LinkButton>Transactions and reports</LinkButton>
            <LinkButton>National Pension Scheme (NPS)</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
