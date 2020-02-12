import React from "react";
import "./styles.scss";
import Logo from "../../assests/graphics/logo.png";

const Header = () => (
  <header>
    <div className="wrap">
      <div className="logo"><img src={Logo} alt='logo'/></div>
    </div>
  </header>
);

export default Header;
