import React from "react";
import LinkButton from "../../LinkButton";

const Stats = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <h2>Trust with confidence</h2>
          <h3 className="mt-5">Customer-first always</h3>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="mt-4">No spam or gimmicks</h3>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="mt-4">The Zerodha universe</h3>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="mt-4">Do better with money</h3>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-3">
          <img
            src="media\images\ecosystem.png"
            alt="ecosystem"
            style={{ width: "90%", height: "90%" }}
          />
          <div className="mt-4 fs-5 mx-4 ">
            <LinkButton>
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </LinkButton>

            <LinkButton>
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
