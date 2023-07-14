"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import WeatherData from "./types/WeatherData";


export default function Home(): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [temperature, setTemperature] = useState<string>("");
  const [humidity, setHumidity] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [windSpeed, setWindSpeed] = useState<string>("");
  const [windDirection, setWindDirection] = useState<string>("");

  const [data, setData] = useState<WeatherData[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const getRandomCityWeather = (): void => {
      if (data.length > 0 && !selectedCity) {
        const randomCityIndex = Math.floor(Math.random() * data.length);
        const randomCityData = data[randomCityIndex];
        if (randomCityData) {
          const {
            temperature,
            humidity,
            description,
            icon,
            wind_speed,
            wind_direction,
          } = randomCityData.current;
          setSelectedCity(randomCityData.city);
          setTemperature(temperature);
          setHumidity(humidity);
          setDescription(description);
          setIcon(icon);
          setWindSpeed(wind_speed);
          setWindDirection(wind_direction);
        }
      }
    };
  
    getRandomCityWeather();
  }, [data, selectedCity]);


  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setQuery(value);
  };

  const filteredData = query
    ? data.filter((item) =>
        item.city.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const onCityClick = (city:string) => {
    const selectedCityData = data.find((item) => item.city === city);
    if (selectedCityData) {
      setSelectedCity(city);
      const { temperature, humidity, description, icon, wind_speed, wind_direction } = selectedCityData.current;
      // Update the state variables for temperature, humidity, and description
      setTemperature(temperature);
      setHumidity(humidity);
      setDescription(description);
      setIcon(icon);
      setWindSpeed(wind_speed);
      setWindDirection(wind_direction);

      setQuery("");
    }
  };

  const getRandomCities = (count: number) => {
    const cities = [];
    const dataCopy = [...data];
    while (cities.length < count && dataCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * dataCopy.length);
      const randomCity = dataCopy.splice(randomIndex, 1)[0];
      cities.push(randomCity);
    }
    return cities;
  };

  const onDayClick = (day: string): void => {
    setSelectedDay(day);
  };

  return (
    <div className="homePage" style={{ backgroundImage: `url(/images/${selectedCity}.jpg)` }}>
      <div className="left">
        <div className="leftHeader">
          <p className="leftCity">{selectedCity}</p>
          <p className="leftDay">{selectedDay}</p>
        </div>

        <div className="leftWeather">
          <div className="leftImageContainer">
            <Image src={`/icons/${icon}.svg`} alt={`${icon}`}
              width={320} height={320} className="leftWeatherImage"
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

      </div>

      <div className="right">
        <div className="rightInput">
          <input
            type="search"
            placeholder="Search for places..."
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
                return cityData.forecast.map((dayData: any) => (
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
                  (item: any) => item.day === selectedDay
                );
                if (selectedDayData) {
                  return (
                    <React.Fragment key={selectedDayData.day}>
                      {selectedDayData.times.map((timeData: any) => (
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
              style={{ backgroundImage: `url(/images/${cityData.image}.jpg)`, }}
              onClick={() => onCityClick(cityData.city)}
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
