import React, { useState } from "react";
import "./Right.css";
import Ellipse from "../../images/Ellipse 131.png";
import {
  ArrowLeft,
  ArrowUpRightSquare,
  BoxArrowRight,
  Mouse,
} from "react-bootstrap-icons";

const Right = () => {
  const [link, setLink] = useState("https://testnet.xyz/trade?ref=");
  const [temp, setTemp] = useState(null);

  const changeLink = () => {
    if (!temp) return;
    if (temp.startsWith("https://")) {
      return setLink(temp);
    }
    setLink("https://".concat(temp));
  };
  return (
    <div className="right-main">
      <div className="right-top">
        <div className="dropdown-main">
          <img src={Ellipse} alt="" />
          <select className="select-main">
            <option value="">Avalanche</option>
            <option value="">General</option>
          </select>
        </div>
        <div className="dropdown-main dropdown-2">
          <Mouse className="top-icon" />
          <select className="select-main">
            <option value="">0XF6...1353</option>
            <option value="">0XF6...1354</option>
          </select>
        </div>
      </div>
      <div className="custom-link">
        <ArrowLeft />
        <h2>Custom link</h2>
      </div>
      <p>{link}</p>
      <input
        onChange={(e) => setTemp(e.target.value)}
        placeholder="ENTER"
        type="url"
      />
      <div className="link-buttons">
        <div onClick={changeLink} className="custom-right">
          <ArrowUpRightSquare />
          <p>Custom Link</p>
        </div>
        <div
          onClick={() => setLink("https://testnet.xyz/trade?ref=")}
          className="cancel"
        >
          <BoxArrowRight />
          <p>Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
