interface WeatherData {
    _id: string;
    city: string;
    country: string;
    current: {
      temperature: string;
      humidity: string;
      description: string;
      icon: string;
      wind_speed: string;
      wind_direction: string;
    };
    forecast: {
      day: string;
      times: {
        time: string;
        temperature: string;
        icon: string;
      }[];
    }[];
    image: string;
  }

  export default WeatherData;