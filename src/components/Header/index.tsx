import React from "react";
import { Link } from "react-router-dom";
import "../../styles.scss";

const Header = () => {
  const navStyle = {
    color: "white",
    textDecorationLine: "none",
    textDecorationStyle: "solid"
  };
  return (
    <nav className="header-top">
      <h3>Logo</h3>
      {/* <Link to="/" style={navStyle}>
</Link> */}
    </nav>
  );
};

export default Header;
