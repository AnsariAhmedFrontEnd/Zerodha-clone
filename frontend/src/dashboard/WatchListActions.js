import React, { useState } from "react";
import {
  Tooltip,
  Grow,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import axios from "axios";

const WatchListActions = ({ uid, marketPrice }) => {
  // State to control the popup visibility
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(marketPrice);

  // Handle open and close for the popup
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBuy = async () => {
    // Handle the buy logic here
    const newOrder = { name: uid, qty: qty, price: price, mode: "BUY" };
    try {
      const response = await axios.post(
        "https://zerodha-clone-1x1d.onrender.com/neworder",
        newOrder,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleOpen}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Chart (C)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Buy</DialogTitle>
        <DialogContent>
          <TextField
            label="Quantity"
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            margin="dense"
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="contained" color="primary" onClick={handleBuy}>
              Buy
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </span>
  );
};

export default WatchListActions;
