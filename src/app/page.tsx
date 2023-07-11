"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

  const [selectedCity, setSelectedCity] = useState("Adana");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  }

  const filteredData = query
  ? data.filter((item) => item.city.toLowerCase().includes(query.toLowerCase()))
  : [];

  const onCityClick = (city) => {
    setSelectedCity(city);
  };
  

  return (
    <div className="homePage">
      <div className="left">
        <div className="leftHeader">
        <p className="leftCity">{selectedCity}</p>
          <p className="leftDay">Pazartesi</p>
        </div>

        <div className="leftWeather">
          <div className="leftImageContainer">
            <Image
              src="/thunderstorm.png"
              alt="thunderstorm"
              width={360}
              height={360}
              className="leftWeatherImage"
            />
          </div>

          <div className="leftWeatherText">
            <p className="leftCentigrade">22°C</p>
            <p className="mb-2">28 / 25°</p>
            <p className=" text-2xl">Cloudy</p>
          </div>
        </div>

        <div className="slider flex flex-row gap-8">
          <div className="sliderItem">
            <p>Storm</p>
          </div>

          <div className="sliderItem">
            <p>Storm</p>
          </div>

          <div className="sliderItem">
            <p>Storm</p>
          </div>
        </div>

        <div className="leftFooter">
          <p>Weather Logo</p>
        </div>
      </div>

      <div className="right">

      <div className="rightInput">
        <input
          type="search"
          placeholder="Search for places"
          className="rightInputText"
          onChange={onChange}
          value={query}
        />
        <ul className={`cityList ${query ? 'show' : ''}`}>
          {filteredData.map((item) => (
            <li key={item.id} onClick={() => onCityClick(item.city)}>
              {item.city}, {item.country}
            </li>
          ))}
        </ul>
      </div>


        <div className="rightWeek">
            <div className="rightTitleContainer">
              <p className="rightCardsTitle">Weekly</p>
            </div>

            <div className="rightDaysContainer">
              <div className="rightDaysCard">
                <Image src="/thunderstorm.png" alt="" width={64} height={64 } />
                <div className="daysCardText">
                  <p className="rightDaysCardTitle">Monday</p>
                  <p className="rightDaysCardCentigrade">22°</p>
                </div>
              </div>
            </div>
        </div>

        <div className="rightHighlight">

            <div className="rightTitleContainer">
              <p className="rightCardsTitle">Today&apos;s Highlight</p>
            </div>

            <div className="rightHighlightContainer">
              <div className="rightHighlightCard">
                <Image src="/thunderstorm.png" alt="" width={64} height={64 } />
                <div className="highlightCardText">
                  <p className="rightHighlightCardTitle">Wind Status</p>
                  <p className="rightHighlightCardCentigrade">22°</p>
                </div>
              </div>
            </div>
  
        </div>

        <div className="rightCities">

          <div className="rightTitleContainer">
            <p className="rightCardsTitle">Other Cities</p>
          </div>

          <div className="rightCitiesContainer">
            <div className="rightCitiesCard">
              <Image src="/thunderstorm.png" alt="" width={64} height={64 } />
              <div className="citiesCardText">
                <p className="rightCitiesCardTitle">Wind Status</p>
                <p className="rightCitiesCardCentigrade">22°</p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
