"use client";
import React from "react";
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import "./direction_button.css";

function DirectionButton({doubleDirectionButtonOnClick,singleDirectionButtonOnClick}) {
    const [alignment, setAlignment] = React.useState('Gidiş-Dönüş');

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
        <ToggleButton value="Gidiş-Dönüş" sx={{textTransform:"initial"}} onClick={doubleDirectionButtonOnClick}>Gidiş-Dönüş</ToggleButton>
        <ToggleButton value="Tek Yön" sx={{textTransform:"initial"}} onClick={singleDirectionButtonOnClick}>Tek Yön</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default DirectionButton;


