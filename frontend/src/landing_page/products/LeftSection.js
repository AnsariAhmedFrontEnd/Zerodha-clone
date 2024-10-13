import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-3">
          <h2 className="mb-3">{productName}</h2>
          <p className="lh-lg">{productDescription}</p>
          <div className="my-4">
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
              className="me-5"
            >
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
              className="ms-5"
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay} className="me-5">
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
