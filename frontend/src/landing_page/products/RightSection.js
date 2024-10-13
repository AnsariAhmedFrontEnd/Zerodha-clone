import React from "react";

const RightSection = ({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h2 className="mb-3 mt-5">{productName}</h2>
          <p className="lh-lg">{productDescription}</p>
          <div className="my-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-7">
          <img src={imageURL} alt="" style={{height:"100%"}} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
