require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParse = require("cookie-parser");
const authRoute = require("./Routes/AuthRouter");
const bodyParse = require("body-parser");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })
);
app.use(bodyParse.json());
app.use(cookieParse());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection error", err);
  });

app.listen(PORT, () => {
  console.log("server is running");
});

app.get("/allholdings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings", error });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const allpositions = await PositionsModel.find({});
    res.json(allpositions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch postions", error });
  }
});

app.post("/neworder", (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    let newOrder = new OrdersModel({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });

    newOrder.save();
    res.status(200).json({ message: "Order executed", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Order not executed", success: false });
  }
});

//Get all orders
app.get("/allorders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch holdings", error });
  }
});

//Exit order
app.delete("/exitorder/:orderId", async (req, res) => {
  const { orderId } = req.params;
  try {
    const exitOrder = await OrdersModel.findByIdAndDelete(orderId);
    if (!exitOrder) {
      return res.status(404).json({ message: "Order not found", success: false });
    }
    console.log(exitOrder)
    res
      .status(200)
      .json({ message: "Order exited successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to exit order", error });
  }
});

//Sell Holding
app.delete("/sellorder/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const sellOrder = await HoldingsModel.findByIdAndDelete(id);
    if (!sellOrder) {
      return res.status(404).json({ message: "Order not found", success: false });
    }
    console.log(sellOrder)
    res
      .status(200)
      .json({ message: "Order exited successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to exit order", error });
  }
});


app.use("/", authRoute);
