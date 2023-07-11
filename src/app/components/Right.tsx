"use client";
import React from "react";
import Image from "next/image";

function Right() {
  return (

    <div className="right">

      <div className="rightInput">
        <input
          type="search"
          placeholder="Search for places"
          className="rightInputText"
        />
      </div>

      <div className="rightWeek">

        <div className="rightTitleContainer">
          <p className="rightCardsTitle">Weekly</p>
        </div>

        <div className="rightDaysContainer">

          <div className="rightDaysCard">
            <Image src="/thunderstorm.png" alt="" width={64} height={64} />
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
            <Image src="/thunderstorm.png" alt="" width={64} height={64} />
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
            <Image src="/thunderstorm.png" alt="" width={64} height={64} />
            <div className="citiesCardText">
              <p className="rightCitiesCardTitle">Wind Status</p>
              <p className="rightCitiesCardCentigrade">22°</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Right;
