import React from 'react'
import "./header_top.css";
import Button from "../../../elements/button"


function Search() {
  return (
      <div className="search-wrapper">
        <input className="search-input"></input>
        <Button class_name="search-btn" text="Search"></Button>
      </div>
  );
}

export default Search;