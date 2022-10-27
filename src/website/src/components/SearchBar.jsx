import React from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder}></input>
        <div className="searchIcon">
          <SearchIcon />
          {/*Current bug, 2 search icon appearing in home*/}
        </div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
}

export default SearchBar;
