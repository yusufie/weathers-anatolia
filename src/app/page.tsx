"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [description, setDescription] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");

  const [data, setData] = useState<Array<any>>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const getRandomCityWeather = () => {
      if (data.length > 0 && !selectedCity) {
        const randomCityIndex = Math.floor(Math.random() * data.length);
        const randomCityData = data[randomCityIndex];
        if (randomCityData) {
          const {
            temperature,
            humidity,
            description,
            wind_speed,
            wind_direction,
          } = randomCityData.current;
          setSelectedCity(randomCityData.city);
          setTemperature(temperature);
          setHumidity(humidity);
          setDescription(description);
          setWindSpeed(wind_speed);
          setWindDirection(wind_direction);
        }
      }
    };
  
    getRandomCityWeather();
  }, [data, selectedCity]);


  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const filteredData = query
    ? data.filter((item) =>
        item.city.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const onCityClick = (city) => {
    const selectedCityData = data.find((item) => item.city === city);
    if (selectedCityData) {
      setSelectedCity(city);
      const { temperature, humidity, description, wind_speed, wind_direction } = selectedCityData.current;
      // Update the state variables for temperature, humidity, and description
      setTemperature(temperature);
      setHumidity(humidity);
      setDescription(description);
      setWindSpeed(wind_speed);
      setWindDirection(wind_direction);
    }
  };

  const getRandomCities = (count) => {
    const cities = [];
    const dataCopy = [...data];
    while (cities.length < count && dataCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * dataCopy.length);
      const randomCity = dataCopy.splice(randomIndex, 1)[0];
      cities.push(randomCity);
    }
    return cities;
  };

  const onDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="homePage">
      <div className="left">
        <div className="leftHeader">
          <p className="leftCity">{selectedCity}</p>
          <p className="leftDay">{selectedDay}</p>
        </div>

        <div className="leftWeather">
          <div className="leftImageContainer">
            <Image
              src="/icons/thunderstorm.svg"
              alt="thunderstorm"
              width={360}
              height={360}
              className="leftWeatherImage"
            />
          </div>

          <div className="leftWeatherText">
            <p className="leftCentigrade">{temperature}°C</p>
            <p className="mb-2">{humidity}</p>
            <p className="text-2xl">{description}</p>
          </div>
        </div>

        <div className="slider flex flex-row gap-8">
          <div className="sliderItem text-center">
            <h1>Wind Speed</h1>
            <span> {windSpeed}</span>
          </div>

          <div className="sliderItem text-center">
            <h1>Wind Direction</h1>
            <span>{windDirection}</span>
          </div>

        </div>

        <div className="leftFooter">
          <p>Weather Logo</p>
        </div>
      </div>

      <div className="right" style={{ backgroundImage: `url(/images/${selectedCity}.jpg)` }}>
        <div className="rightInput">
          <input
            type="search"
            placeholder="Search for places"
            className="rightInputText"
            onChange={onChange}
            value={query}
          />
          <ul className={`cityList ${query ? "show" : ""}`}>
            {filteredData.map((item) => (
              <li key={item._id} onClick={() => onCityClick(item.city)}>
                {item.city}, {item.country}
              </li>
            ))}
          </ul>
        </div>

        <div className="rightWeek">
          <div className="rightTitleContainer">
            <p className="rightCardsTitle">Weekly</p>
          </div>

          <div className="rightDaysButtons">
            {data.map((cityData) => {
              if (cityData.city === selectedCity) {
                return cityData.forecast.map((dayData) => (
                  <button
                    key={dayData.day}
                    onClick={() => onDayClick(dayData.day)}
                    className={selectedDay === dayData.day ? "active" : ""}
                  >
                    {dayData.day}
                  </button>
                ));
              }
              return null;
            })}
          </div>

          <div className="rightDaysContainer">
            {data.map((cityData) => {
              if (cityData.city === selectedCity) {
                const selectedDayData = cityData.forecast.find(
                  (item) => item.day === selectedDay
                );
                if (selectedDayData) {
                  return (
                    <React.Fragment key={selectedDayData.day}>
                      {selectedDayData.times.map((timeData) => (
                        <div key={timeData.time} className="rightDaysCard">
                          <Image src={`/icons/${timeData.icon}.svg`} alt="" width={64} height={64} />
                          <div className="daysCardText">
                            <p className="rightDaysCardTitle">
                              {timeData.time}
                            </p>
                            <p className="rightDaysCardCentigrade">
                              {timeData.temperature}°
                            </p>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  );
                }
              }
              return null;
            })}
          </div>
        </div>

        <div className="rightCities">
          <div className="rightTitleContainer">
            <p className="rightCardsTitle">Other Cities</p>
          </div>

          <div className="rightCitiesContainer">
            {getRandomCities(4).map((cityData) => (
              <div key={cityData.city} className="rightCitiesCard"
              style={{
                backgroundImage: `url(/images/${cityData.image}.jpg)`,
              }}
              >
                <Image src={`/icons/${cityData.current.icon}.svg`} alt="" width={64} height={64} />
                <div className="citiesCardText">
                  <p className="rightCitiesCardTitle">{cityData.city}</p>  
                  <p className="rightCitiesCardCentigrade">
                    {cityData.current.temperature}°
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
