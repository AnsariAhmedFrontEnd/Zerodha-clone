import React from "react";
import LinkButton from "../../LinkButton";

const Education = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-6 p-5">
            <img
              src="media\images\education.svg"
              alt="varisity"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-6 p-5">
            <h2 className="mt-5">Free and open market education</h2>
            <p className="mt-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <LinkButton>Varsity</LinkButton>
            <p className="mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <LinkButton>
              Trading Q&A <i className="fa-solid fa-arrow-right-long"></i>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
