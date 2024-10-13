import React from "react";
import "./Footer.css";
import LinkButton from "../LinkButton";

const Footer = () => {
  return (
    <footer
      className="container-fluid border-top bg-light px-5"
    >
      <div className="row mt-5 px-5">
        <div className="col-3">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "60%" }}
          />
          <div>
            <p className="mb-0 mt-4 footer-para">
              &copy; 2010 - 2024, Zerodha Broking Ltd.
            </p>
            <p className="footer-para">All rights reserved.</p>
          </div>
          <div className="social-icons">
            <div>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className="mb-4">Compnay</h4>
          <div className="links">
            <LinkButton>About</LinkButton>
            <LinkButton>Products</LinkButton>
            <LinkButton>Pricing</LinkButton>
            <LinkButton>Refrral programme</LinkButton>
            <LinkButton>Careers</LinkButton>
            <LinkButton>Zerodha.tech</LinkButton>
            <LinkButton>Press & media</LinkButton>
            <LinkButton>Zerodha Cares</LinkButton>
          </div>
        </div>
        <div className="col-3">
          <h4 className="mb-4">Support</h4>
          <div className="links">
            <LinkButton>Contact us</LinkButton>
            <LinkButton>Support portal</LinkButton>
            <LinkButton>Z-Connect blog</LinkButton>
            <LinkButton>List of charges</LinkButton>
            <LinkButton>Download and Resources</LinkButton>
            <LinkButton>Videos</LinkButton>
            <LinkButton>Market overview</LinkButton>
            <LinkButton>How to file a complaint?</LinkButton>
            <LinkButton>Status of your complaints</LinkButton>
          </div>
        </div>
        <div className="col-3">
          <h4 className="mb-4">Account</h4>
          <div className="links">
            <LinkButton>Open and account</LinkButton>
            <LinkButton>Fund transer</LinkButton>
          </div>
        </div>
      </div>
      <div className="row px-5 mb-5">
        <p className="footer-para mt-4">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p className="footer-para">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p className="footer-para">
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
        </p>
        <p className="footer-para">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="footer-para">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p className="footer-para">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
