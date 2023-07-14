# Weathers Anatolia Full-Stack Web App

Weathers Anatolia is a web application that provides weather information for cities in Anatolia, Turkey. 
## Live Demo
The application is deployed on Vercel and can be accessed at [https://weathers-anatolia.vercel.app/](https://weathers-anatolia.vercel.app/)

![Weathers Anatolia](/public/images/readme.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run the Weathers Anatolia web app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yusufie/weathers-anatolia.git
    ```

2. Navigate to the project directory:

   ```bash
   cd weathers-anatolia
   ```

3. Install the dependencies:

   ```bash
    npm install
    ```

4. Create a `.env.local` file in the root directory and add the following environment variables:

    ```bash
    MONGODB_URI=<your mongodb uri>
    ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Database
The application uses MongoDB to store city and weather data. Make sure you have MongoDB installed and running locally or provide a remote MongoDB connection URI in the configuration.

## Usage

### Search for a city

1. Enter a city name in the search input field.
2. Select a city from the list of suggestions.
3. The current weather information will be displayed, including temperature, description, icon, humidity, wind speed, and wind direction.
4. Click on a day from the 7-day forecast to view the detailed weather information for that day and different time periods (morning, afternoon, evening, and night).

### View a random city

1. Click on a city from the random cities image container.
2. The current weather information will be displayed, including temperature, description, icon, humidity, wind speed, and wind direction.
3. Click on a day from the 7-day forecast to view the detailed weather information for that day and different time periods (morning, afternoon, evening, and night).

## Features

- Get current weather information for cities in Anatolia, including temperature, description, icon, humidity, wind speed, and wind direction.
- View a 7-day forecast for selected cities, with detailed weather information for each day and time period.
- Search for cities by name and select them from a list of suggestions.
- Click on a city from the random cities image container to view its weather information.

## Technologies

- Next.js
- React
- TypeScript
- MongoDB
- Mongoose
- Module CSS

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit those changes.
4. Push your code to your forked repository.
5. Submit a pull request describing the changes you made.

Please make sure to follow the existing code style and conventions.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Feel free to explore the codebase and make it your own! If you have any questions, reach out to the project maintainers or create an issue on GitHub.

We hope you find Weathers Anatolia useful for checking the weather in Anatolia! Enjoy the application and stay informed about the weather conditions in your favorite cities.

Feel free to modify the content according to your specific project details, and customize the sections as per your requirements.
