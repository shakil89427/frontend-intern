import React, { useEffect, useState } from "react";
import {
  ArrowUpRightSquare,
  Front,
  Mouse,
  Shield,
} from "react-bootstrap-icons";
import smallLogo from "../../images/11.png";
import "./Content.css";

const Contents = () => {
  const [fetcheddata, setFetchedData] = useState([]);
  const [dataState, setDataState] = useState(0);

  const copyText = () => {
    navigator.clipboard.writeText("https://unitexchange.design");
    alert("Text copied");
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => res.json())
      .then((data) => setFetchedData(data.data));
  }, []);
  return (
    <div className="content-main">
      <div className="content-top">
        <h3 className="section">Section</h3>
        <div className="content-top-right">
          <Mouse className="content-top-icon" />
          <p>0.2 $XYZ</p>
          <p className="tier">Tier 1</p>
        </div>
      </div>

      <div className="small-banner">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, earum.
        </p>
        <button>Tutorial</button>
        <img className="small-logo" src={smallLogo} alt="" />
      </div>

      <div className="reward">
        <div className="reward-left">
          <h4>Your rewards</h4>
          <h1>$ 0.26231428</h1>
          <button>$40 AVAX</button>
          <button>$10 BNB</button>
          <button>$210 BTC</button>
        </div>
        <div className="reward-right">
          <ArrowUpRightSquare />
          <p>Custom Link</p>
        </div>
      </div>

      <div className="fee">
        <div className="left">
          <div className="head">
            <div className="icondiv">
              <Shield />
            </div>
            <h2>12.5% of fee</h2>
          </div>
          <p className="referal-p">Your Referral Link for xyz</p>
          <div className="copy-link">
            <input
              readOnly
              defaultValue="https://unitexchange.design"
              type="text"
            />
            <Front onClick={copyText} />
          </div>
        </div>
        <div className="right">
          <div className="head">
            <div className="icondiv">
              <Shield />
            </div>
            <h2>12.5% of fee</h2>
          </div>
          <p className="referal-p">Your Referral Link for xyz</p>
          <div className="copy-link">
            <input
              readOnly
              defaultValue="https://unitexchange.design"
              type="text"
            />
            <Front onClick={copyText} />
          </div>
        </div>
      </div>
      <div className="tabs">
        <div className="buttons">
          <h2
            className={dataState === 0 ? "active" : ""}
            onClick={() => setDataState(0)}
          >
            First Tab
          </h2>
          <h2
            className={dataState === 1 ? "active" : ""}
            onClick={() => setDataState(1)}
          >
            Second Tab
          </h2>
        </div>
        <div className="tab-data-head">
          <p>ASSET</p>
          <p>AMOUNT</p>
          <p>USER ACCOUNT</p>
          <p>REFFERAL EARNINGS</p>
        </div>
        <div className="table-data">
          {console.log(fetcheddata)}
          <div className="flexed">
            <img className="asset" src={fetcheddata[dataState]?.img} alt="" />
            <div className="">
              <p>Bitcoin</p>
              <div className="flexed">
                <p className="type">Put</p>
                <div className="chain">
                  <img src={fetcheddata[dataState]?.chain?.img} alt="i" />
                  <small>{fetcheddata[dataState]?.chain?.name}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="second-data">
            <p>0.0000 BNB</p>
            <p className="state">{fetcheddata[dataState]?.state}</p>
          </div>
          <p className="user">
            {fetcheddata[dataState]?.user.slice(0, 5)}..
            {fetcheddata[dataState]?.user.slice(
              fetcheddata[dataState]?.user.length - 8,
              fetcheddata[dataState]?.user.length
            )}
          </p>
          <div className="fourth-data">
            <p>0.000.BNB</p>
            <div className="view-on">
              <p>View on BSC Scan</p>
              <ArrowUpRightSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
