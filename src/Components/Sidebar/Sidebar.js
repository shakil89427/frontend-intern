import React from "react";
import {
  AlignBottom,
  ArrowLeft,
  CircleFill,
  Coin,
  FileEarmark,
  Globe,
  House,
  Messenger,
  MoonFill,
  Reception4,
  Share,
  SortNumericUpAlt,
  StackOverflow,
  TropicalStorm,
} from "react-bootstrap-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div>
        <div className="sidebar-header">
          <div className="profile-part">
            <div className="profile-image">N</div>
            <h2>Name</h2>
          </div>
          <ArrowLeft />
        </div>
        <div className="sidebar-body">
          <div className="sidebar-body-item">
            <House /> <p>Home</p>
          </div>
          <div className="sidebar-body-item">
            <StackOverflow />
            <p>Section 1</p>
          </div>
          <div className="sidebar-body-item">
            <AlignBottom />
            <p>Section 2</p>
          </div>
          <div className="sidebar-body-item">
            <Messenger />
            <p>Section 3</p>
          </div>
          <div className="sidebar-body-item">
            <Coin />
            <p>Section 4</p>
          </div>
          <div className="sidebar-body-item">
            <TropicalStorm />
            <p>Section 5</p>
          </div>
          <div className="sidebar-body-item">
            <Reception4 />
            <p>Section 6</p>
          </div>
          <div className="sidebar-body-item">
            <SortNumericUpAlt />
            <p>Section</p>
          </div>
          <div className="sidebar-body-item">
            <Share />
            <p>Section 7</p>
          </div>
          <div className="sidebar-body-item">
            <FileEarmark />
            <p>Documention</p>
          </div>
        </div>
      </div>
      <div>
        <div className="sidebar-body-footer">
          <div className="first">
            <p className="small-profile">N</p>
            <p>$0.90</p>
          </div>
          <div className="second">
            <p>Buy $xyz</p>
          </div>
        </div>
        <div className="sidebar-footer">
          <Globe />
          <div className="sidebar-footer-right">
            <MoonFill />
            <CircleFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
