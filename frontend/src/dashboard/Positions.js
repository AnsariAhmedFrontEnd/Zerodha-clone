import React, { useEffect, useState } from "react";
import axios from "axios";

const Positions = () => {
  const [allpositions, setAllPositions] = useState([]);

  const fetchAllPositions = async () => {
    try {
      const response = await axios.get("https://zerodha-clone-1x1d.onrender.com/allpositions");
      setAllPositions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPositions();
  }, []);
  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allpositions.map((position) => {
            const currentValue = position.qty * position.price;
            const isProfit = currentValue - position.avg * position.qty >= 0;
            const isProfitClass = isProfit ? "profit" : "loss";
            const dayClass = position.isLoss ? "loss" : "profit";
            return (
              <tr key={position._id}>
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty}</td>
                <td>{position.avg.toFixed(2)}</td>
                <td>{position.price.toFixed(2)}</td>
                <td className={isProfitClass}>
                  {(currentValue - position.avg * position.qty).toFixed(2)}
                </td>

                <td className={dayClass}>{position.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
