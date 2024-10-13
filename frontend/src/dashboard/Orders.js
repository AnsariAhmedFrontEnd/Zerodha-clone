import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get("https://zerodha-clone-1x1d.onrender.com/allorders");
      setAllOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const exitOrder = async(orderId) => {
try {
  const response = await axios.delete(`https://zerodha-clone-1x1d.onrender.com/exitorder/${orderId}`)
  fetchAllOrders()
  console.log(response)
} catch (error) {
  
}
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>

          {allOrders.map((order) => {
            return (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>
                  <button className="sell" onClick={() => {exitOrder(order._id)}}>Exit</button>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
