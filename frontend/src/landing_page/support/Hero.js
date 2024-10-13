import React from "react";
import LinkButton from "../../LinkButton";

const Hero = () => {
  return (
    <div
      className="container-fluid px-5 mb-5 pb-5"
      style={{ backgroundColor: "#387ed1", color: "white" }}
      id="supportWrapper"
    >
      <div className="d-flex flex-row justify-content-between mx-5 px-5 py-5">
        <h4>Support Portal</h4>
        <LinkButton>Track tickets</LinkButton>
      </div>

      <div className="row mx-5 px-5">
        <div className="col-6">
          <h2 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h2>
          <div className="mt-4">
            <input
              className="w-100 p-3 border-0 rounded"
              type="text"
              name=""
              id=""
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
          </div>
          <div className="d-flex flex-wrap gap-4 mt-3">
            <LinkButton>Track account opening</LinkButton>
            <LinkButton>Track segment activation</LinkButton>
            <LinkButton>Intraday margins</LinkButton>
            <LinkButton>Kite user manual</LinkButton>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <h2 className="fs-4">Featured</h2>
          <ol className="mt-3">
            <li className="mb-3">
              <LinkButton>
                Surveillance measure on scrips - September 2024
              </LinkButton>
            </li>
            <li>
              <LinkButton>
                Rights Entitlements listing in September 2024
              </LinkButton>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
