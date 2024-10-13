import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchListActions from "./WatchListActions";

const WatchListItem = ({ stock }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const isDownClass = stock.isDown ? "down" : "up";

  const handleMouseEnter = () => {
    setShowWatchlistAction(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistAction(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={isDownClass}>{stock.name}</p>
        <div className="itemInfo">
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className={isDownClass} />
          ) : (
            <KeyboardArrowUp className={isDownClass} />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistAction && <WatchListActions uid={stock.name} marketPrice={stock.price} />}
    </li>
  );
};

export default WatchListItem;
