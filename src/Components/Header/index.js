import React from "react";
import PropTypes from "prop-types";
import { Badge, Tooltip } from "antd";
import { NavLink } from "react-router-dom";

import "./header.scss";
import { fb, logo } from "../../assets/icon";
import { girl, line } from "../../assets/image";

import abc from '../../assets/image/'

const link = (to, label) => (
  <NavLink to={to} activeStyle={{ textDecoration: "underline" }}>
    {label}
  </NavLink>
);

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container ">
          <div className="wrapContact">
            <div className="left">
              {link("/contact", "+1 212 946 2700")}
              {link("/help", "Help Center")}
              {link("/docs", "Docs")}
            </div>

            <div className="right">
              <a href="/contact">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="/contact">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="/contact">
                <img src={fb} alt="icon" width="11" height="11" />
              </a>
              <a href="/contact">
                <ion-icon name="earth-outline"></ion-icon>
              </a>
            </div>
          </div>

          <div className="wrapNav">
            <img className="logo" alt="logo" src={logo} />
            <div className="nav">
              <nav>
                {link("/home", "Home")}
                {link("/about", "About")}
                {link("/services", "Services")}
                {link("/pricing", "Pricing")}
                {link("/products", "Products")}
                {link("/resource", "Resource")}

                <button className="iconButton">
                  <Tooltip
                    placement="bottomLeft"
                    title="Notifications"
                    trigger="click"
                  >
                    <Badge count={4} size={"small"} title="4 notifications">
                      <ion-icon name="notifications"></ion-icon>
                    </Badge>
                  </Tooltip>
                </button>

                <Tooltip placement="bottomLeft" title="Search" trigger="click">
                  <button style={{ color: "#FF268B" }} className="iconButton">
                    <ion-icon name="search" />
                  </button>
                </Tooltip>
                <Tooltip
                  placement="bottomLeft"
                  title="Contact us"
                  trigger="click"
                >
                  <button className="contactUs">Contact us</button>
                </Tooltip>
              </nav>
            </div>
          </div>

          <div className="wrapDriving">
            <div className="text">
              <div className="wrapLabel">
                <h2>Driving meaningful change through technology & design</h2>
                <img src={line} className="line" />
                <img src={line} className="line" style={{ right: 50 }} />
              </div>

              <h3>
                Crafting delightful experiences through meticulous attention to
                detail. We help our clients reach their full potential through
                serving as the management team.
              </h3>
            </div>
            <img src={girl} className="girl" alt="image" />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
