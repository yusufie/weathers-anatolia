import React from 'react'
import Image from 'next/image'


function Left() {
  return (
    <div className="left">

    <div className="leftHeader">
      <p className="leftCity">Trabzon</p>
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
  )
}

export default Left