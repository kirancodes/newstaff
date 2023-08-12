import React, { useRef, useState } from "react";
import logo from "../../assets/EasyStaff.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [navigation, setNavigation] = useState(false);
  const active = useRef(null);

  return (
    <div className="container navigation__wrapper">
      <NavLink exact to="/">
        <img alt="logo" src={logo} />
      </NavLink>

      <span
        className="toggle-button"
        onClick={() => {
          setNavigation(!navigation);
        }}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </span>
      <nav>
        <ul className={navigation ? "active" : ""} ref={active}>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about">
            About us
          </NavLink>
          <NavLink exact to="/services">
            Services
          </NavLink>
          <NavLink exact to="/contact-us">
            Contact Us
          </NavLink>
        </ul>
      </nav>
      <NavLink
        exact

        to="/request-quote"
        className="btn quote-btn"
      >
        Apply now
      </NavLink>
    </div>
  );
};

export default Navigation;
