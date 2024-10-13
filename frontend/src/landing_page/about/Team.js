import React from "react";

const Team = () => {
  return (
    <div className="container border-top">
      <div className="row mt-5">
        <h2 className="text-center">People</h2>
      </div>
      <div className="row p-5">
        <div className="col-6 text-center">
          <img src="media/images/nithinKamath.jpg" alt="Nitin" style={{borderRadius:"100%", width:"50%"}} />
          <h5 className="mt-4">Nithin Kamath</h5>
          <p className="mt-2">Founder, CEO</p>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
