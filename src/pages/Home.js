import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "../Search";

function Home() {
  return (
    <div className="home">
      {/* This is the home header... */}
      <div className="home_header">
        <div className="home_headerLeft">
          {/* About link...*/}
          <Link to="/About"> About</Link>

          {/* Store link link...*/}
          <Link to="/Store"> Store</Link>
        </div>

        <div className="home_headerRight">
          {/* Gmail link......*/}
          <Link to="/Gmail"> Gmail</Link>

          {/* Images link......*/}
          <Link to="/images"> images</Link>

          {/* icon link......*/}
          <AppsIcon />

          {/* Avatar link......*/}
          <AccountCircleIcon />
        </div>
      </div>

      {/* This is the home body... */}
      <div className="home_body">
        {/* Google Logo */}
        <img src="../google-logo.png" alt="" />

        {/* Google Search bar */}
        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
