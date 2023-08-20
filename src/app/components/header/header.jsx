"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';

import Logo from "../../../../public/logo.png";

import "../header/header.css"

function Header() {

  return (
    <AppBar style={{ backgroundColor:"white" ,height:"70px", display:'flex', alignItems:"center", justifyContent:"center"}}>

        <Toolbar className='header-main-items-toolbar'>
                <div className='header-logo-box'>
                    <Image
                        src={Logo}
                        alt="Directbox Receive icon"
                        width="170"
                        height="50"
                    />
                </div>
        </Toolbar>
    

    </AppBar>
  );
}
export default Header;
