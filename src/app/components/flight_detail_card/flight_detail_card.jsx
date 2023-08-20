"use client";
import React from "react";
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';

import "./flight_detail_card.css";

function FlightDetailCard({departureTime,arriveTime,departureAirportCode,arriveAirportCode,price,flightTime,handleClick}) {
  return (
   
        <div className="flight-detail-card-container">
            <div className="aiport-and-time">
                <span className="code-text">{departureAirportCode}</span>
                <span className="time-text">{departureTime}</span>
            </div>
            <div className="flight-time">
                <span className="flight-time-text">{flightTime}</span>
                <EastIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="aiport-and-time">
                <span className="code-text">{arriveAirportCode}</span>
                <span className="time-text">{arriveTime}</span>
            </div>
            <div className="price">
                <span className="price-text">{price}</span>
            </div>
            <Button
                className='buy-button'
                id="buy-button"
                onClick={handleClick}
                variant="outlined"
            >
                Satın Al
            </Button>
        </div>
    
  );
}

export default FlightDetailCard;


