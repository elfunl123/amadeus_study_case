"use client";
import React, { useEffect, useState } from "react";
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

import "./airport_selection.css";

function AirportSelection({airportList}) {

    const [airport1, setAirport1] = React.useState('');

    const handleChange1 = (event) => {
        setAirport1(event.target.value);
        air
    };

    const [airport2, setAirport2] = React.useState('');

    const handleChange2 = (event) => {
        setAirport2(event.target.value);
    };


  return (
    <div className="airport-selection-container">

        <FormControl sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id="departure-airport-inputlabel">Kalkış Havaalanı</InputLabel>
            <Select
                labelId="departure-airport-select-label"
                id="departure-airport-select"
                value={airport1}
                label="Kalkış Havaalanı"
                onChange={handleChange1}
            >
            <MenuItem value={1} key={airportList[0].id} >{airportList[0].name+" / "+airportList[0].code}</MenuItem>
            <MenuItem value={2} key={airportList[1].id}>{airportList[1].name+" / "+airportList[1].code}</MenuItem>
            <MenuItem value={3} key={airportList[2].id}>{airportList[2].name+" / "+airportList[2].code}</MenuItem>
            <MenuItem value={4} key={airportList[3].id}>{airportList[3].name+" / "+airportList[3].code}</MenuItem>
            <MenuItem value={5} key={airportList[4].id}>{airportList[4].name+" / "+airportList[4].code}</MenuItem>
            <MenuItem value={6} key={airportList[5].id}>{airportList[5].name+" / "+airportList[5].code}</MenuItem>
            <MenuItem value={7} key={airportList[6].id}>{airportList[6].name+" / "+airportList[6].code}</MenuItem>
            <MenuItem value={8} key={airportList[7].id}>{airportList[7].name+" / "+airportList[7].code}</MenuItem>
            <MenuItem value={9} key={airportList[8].id}>{airportList[8].name+" / "+airportList[8].code}</MenuItem>
            <MenuItem value={10} key={airportList[9].id}>{airportList[9].name+" / "+airportList[9].code}</MenuItem>
            <MenuItem value={11} key={airportList[10].id}>{airportList[10].name+" / "+airportList[10].code}</MenuItem>

            {/* {airportList.map((item,index) => {
                <MenuItem value={index} key={item.id} >{item.name+" / "+item.code}</MenuItem>
            })} */} 

            </Select>
        </FormControl>

        <ConnectingAirportsIcon sx={{ fontSize: 40 }} />

        <FormControl sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id="arrive-airport-inputlabel">Varış Havaalanı</InputLabel>
            <Select
                labelId="arrive-airport-select-label"
                id="arrive-airport-select"
                value={airport2}
                label="Varış Havaalanı"
                onChange={handleChange2}
            >
            <MenuItem value={1} key={airportList[0].id}>{airportList[0].name+" / "+airportList[0].code}</MenuItem>
            <MenuItem value={2} key={airportList[1].id}>{airportList[1].name+" / "+airportList[1].code}</MenuItem>
            <MenuItem value={3} key={airportList[2].id}>{airportList[2].name+" / "+airportList[2].code}</MenuItem>
            <MenuItem value={4} key={airportList[3].id}>{airportList[3].name+" / "+airportList[3].code}</MenuItem>
            <MenuItem value={5} key={airportList[4].id}>{airportList[4].name+" / "+airportList[4].code}</MenuItem>
            <MenuItem value={6} key={airportList[5].id}>{airportList[5].name+" / "+airportList[5].code}</MenuItem>
            <MenuItem value={7} key={airportList[6].id}>{airportList[6].name+" / "+airportList[6].code}</MenuItem>
            <MenuItem value={8} key={airportList[7].id}>{airportList[7].name+" / "+airportList[7].code}</MenuItem>
            <MenuItem value={9} key={airportList[8].id}>{airportList[8].name+" / "+airportList[8].code}</MenuItem>
            <MenuItem value={10} key={airportList[9].id}>{airportList[9].name+" / "+airportList[9].code}</MenuItem>
            <MenuItem value={11} key={airportList[10].id}>{airportList[10].name+" / "+airportList[10].code}</MenuItem>

            {/* {airportList.map((item,index) => {
                <MenuItem value={index} key={item.id} >{item.name+" / "+item.code}</MenuItem>
            })} */} 
            </Select>
        </FormControl>

    </div>
  );
}

export default AirportSelection;


