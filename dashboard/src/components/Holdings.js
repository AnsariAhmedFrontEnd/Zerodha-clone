import React, { useState, useEffect } from "react";
import axios from "axios";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  const fetchAllHoldings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allholdings");
      console.log(response.data);

      setAllHoldings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllHoldings();
  }, []);
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((holding) => {
            const currentValue = holding.qty * holding.price;
            const avgCost = holding.price * holding.qty;
            const isProfit = currentValue - holding.avg * holding.qty >= 0;
            const profitClass = isProfit ? "profit" : "loss";

            return (
              <tr key={holding._id}>
                <td>{holding.name}</td>
                <td>{holding.qty}</td>
                <td>{avgCost}</td>
                <td>{holding.price}</td>
                <td>{currentValue}</td>
                <td className={profitClass}>
                  {(currentValue - holding.avg * holding.qty).toFixed(2)}
                </td>
                <td className={profitClass}>{holding.net}</td>
                <td className={profitClass}>{holding.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
