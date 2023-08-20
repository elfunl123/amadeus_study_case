"use client";
import React from "react";
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function FilterButtonGroup({departureTimeClick,arriveTimeClick,flightTimeClick,priceClick}) {
    const [alignment, setAlignment] = React.useState('departureTime');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

  return (
    <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
    >
        <ToggleButton value="departureTime" sx={{textTransform:"initial"}} onClick={departureTimeClick}>Kalkış Saati</ToggleButton>
        <ToggleButton value="arriveTime" sx={{textTransform:"initial"}} onClick={arriveTimeClick}>Varış Saati</ToggleButton>
        <ToggleButton value="flightTime" sx={{textTransform:"initial"}} onClick={flightTimeClick}>Uçuş Süresi</ToggleButton>
        <ToggleButton value="price" sx={{textTransform:"initial"}} onClick={priceClick}>Fiyat</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default FilterButtonGroup;


