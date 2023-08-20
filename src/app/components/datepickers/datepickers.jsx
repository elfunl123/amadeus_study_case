"use client";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import "./datepickers.css";
import { Input } from '@mui/material';

export default function BasicDatePicker() {
  return (
    <div className="datepickers-container">
        <div className='input-container'>
          <span>Gidiş Tarihi</span>
          <Input type="date" id="gidiş" sx={{height:40, width:150}}></Input>
        </div>

        <CalendarMonthIcon sx={{ fontSize: 30 }} />

        <div className='input-container'>
          <span>Dönüş Tarihi</span>
          <Input type="date" id="dönüş" sx={{height:40, width:150}}></Input>
        </div>
    </div>
  );
}