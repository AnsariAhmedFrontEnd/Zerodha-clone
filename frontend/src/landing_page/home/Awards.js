import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-4">
          <img src="media/images/largestBroker.svg"  alt="award"/>
        </div>
        <div className="col-6 p-4 mt-3">
          <h2>Largest stock brokre in Idnia</h2>
          <p className="mt-2">
            2+ million Zerodha clients contribute to over 15% of all retail
            order vokumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks in IPOs</p>
                </li>
                <li>
                  <p>Direct mutal funds</p>
                </li>
                <li>
                  <p>Bonds</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="pressLogo" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
};

export default Awards;
