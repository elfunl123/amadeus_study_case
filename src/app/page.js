"use client";

import React, { useEffect, useState } from "react";

import AirportSelection from "./components/airport_selection/airport_selection";
import BasicDatePicker from "./components/datepickers/datepickers";
import DirectionButton from "./components/direction_button/direction_button";
import FilterButtonGroup from "./components/filter/filter";
import FlightDetailCard from "./components/flight_detail_card/flight_detail_card";
import Header from "./components/header/header";
import SearchFlightButton from "./components/search_flights_button/search_flight_button";

import { airport } from "./airport.js";
import { ticket } from "./ticket.js";

import "./page.css"

const searchButton = {text:"Uçuş Ara", link:"/"}

const singleDirectionButtonFunction = () => {
  document.getElementById("dönüş").disabled = true;
};

const doubleDirectionButtonFunction = () => {
  document.getElementById("dönüş").disabled = false;
};

/* var element_1= document.getElementById("departure-airport-select")
var departureAirport = element_1.getAttribute("value");

var element_2 = document.getElementById("arrive-airport-select")
var departureAirport = element_2.getAttribute("value");

var element_3 = document.getElementById("gidiş")
var date = element_3.value; */





export default function Home() {

  /* const [airports, setAirport] = useState([])

  const fetchAirportData = () => {
    fetch("https://64e21a3eab0037358818aed2.mockapi.io/airports")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAirport(data)
      })
  }

  useEffect(() => {
    fetchAirportData()
  }, [])

  const [tickets, setTickets] = useState([])

  const fetchTicketData = () => {
    fetch("https://64e21a3eab0037358818aed2.mockapi.io/ticket")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTickets(data)
      })
  }

  useEffect(() => {
    fetchTicketData()
  }, []) */

  /* normalde burda mockapi.io sitesi üzerinden oluşturduğum api ve datalarla fetch ve response işlemleri
  yaptırdım data'yıda düzgün çekiyor. linkleri kontrol edebilirsiniz. fakat case'i yetiştiremediğim için bunları
  kod içerisinde kullanamadım. projenin içine json formatta data'ları gömdüm ama onlarda da çok fazla hata aldım
  çalışırken. bilmediğimi düşünmenizi istemem o yüzden bir kaç yerde normalde olması gereken kod satılarını comment'e aldım
  inceleyebilirsiniz. */

  return (
    
    <div className="page-container">
      <Header></Header>
      <div className="container-1">
        <DirectionButton doubleDirectionButtonOnClick={doubleDirectionButtonFunction} singleDirectionButtonOnClick={singleDirectionButtonFunction}></DirectionButton>
      </div>
      <div className="container-2">
        <AirportSelection airportList={airport}></AirportSelection>
        <BasicDatePicker></BasicDatePicker>
        <SearchFlightButton searchFlightButtonText={searchButton.text}></SearchFlightButton>
      </div>
      <div className="filter-container">
        <span>Sıralama Kriterleri:</span>
        <FilterButtonGroup></FilterButtonGroup>
      </div>

      <FlightDetailCard arriveAirportCode={"ESB"}arriveTime={"16.00"}departureAirportCode={"ESB"}departureTime={"16.00"}flightTime={"3 saat"}price={"1000TL"}></FlightDetailCard>
      <FlightDetailCard arriveAirportCode={"ESB"}arriveTime={"16.00"}departureAirportCode={"ESB"}departureTime={"16.00"}flightTime={"3 saat"}price={"1000TL"}></FlightDetailCard>
      <FlightDetailCard arriveAirportCode={"ESB"}arriveTime={"16.00"}departureAirportCode={"ESB"}departureTime={"16.00"}flightTime={"3 saat"}price={"1000TL"}></FlightDetailCard>
      <FlightDetailCard arriveAirportCode={"ESB"}arriveTime={"16.00"}departureAirportCode={"ESB"}departureTime={"16.00"}flightTime={"3 saat"}price={"1000TL"}></FlightDetailCard>

      {/* {ticket.map((item,index) => {
        if((item.departureAirport+" / "+item.departureAirportCode)==departureAirport&&(item.departureAirport+" / "+item.departureAirportCode)==arriveAirport&&item.date1==date)
          return <FlightDetailCard arriveAirportCode={"ESB"}arriveTime={"16.00"}departureAirportCode={"ESB"}departureTime={"16.00"}flightTime={"3 saat"}price={"1000TL"}></FlightDetailCard>
      })} */}
    
    </div>
  )
}

