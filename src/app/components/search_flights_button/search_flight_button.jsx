"use client";
import React from "react";
import Button from '@mui/material/Button';

import "./search_flight_button.css";

function SearchFlightButton({searchFlightButtonText,handleClick}) {
  return (
   
      <Button
          className='search-flight-button'
          id="search-flight-button"
          onClick={handleClick}
          variant="outlined"
      >
        {searchFlightButtonText}
      </Button>
    
  );
}

export default SearchFlightButton;


