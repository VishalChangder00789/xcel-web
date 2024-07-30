import React, { useState } from "react";
import "./navbar.css";

// assets
import _excelLogo from "../../assets/navbar-icons/logo.png";
import _searchBarLogo from "../../assets/navbar-icons/search.png";

// handlers
import handle from "../../components/navbar/handlers/searchInputHandler";

const Navbar = () => {
  // information
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="navbar-main">
      <div className="navbar-logo-container">
        <img src={_excelLogo} alt="app-logo" />
      </div>
      <div className="navbar-search-bar">
        <div className="navbar-search-bar-logo-container">
          <img src={_searchBarLogo} alt="search-logo" />
        </div>
        <input
          value={inputValue}
          onChange={(e) => handle.handleSearchBar(e, inputValue, setInputValue)}
        />
      </div>
    </div>
  );
};

export default Navbar;
