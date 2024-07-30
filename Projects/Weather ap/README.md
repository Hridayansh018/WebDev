## Weather App Documentation

### Overview
This documentation provides an explanation of a simple weather application that allows users to search for weather information based on city names. The application fetches data from the OpenWeatherMap API and displays relevant weather details on the webpage.

### Files
- **index.html**: This file contains the structure and layout of the weather application UI.
- **index.js**: This JavaScript file contains the logic for interacting with the OpenWeatherMap API, handling user input, and updating the UI based on API responses.

### HTML Structure (index.html)
The HTML file defines the structure of the weather application UI using Bootstrap for styling. Here's a breakdown of the key elements:

- **Head Section**: Includes necessary meta tags, CSS links for styling, and JavaScript imports.
- **Body Section**: Contains the main content of the weather application.
  - **Header**: Displays the application title.
  - **Search Section**: Allows users to input a city name and trigger a search for weather data.
  - **Weather Information Section**: Displays weather information such as temperature, humidity, weather status, and an image corresponding to the weather condition.

### JavaScript (index.js)
The JavaScript file handles the functionality of fetching weather data from the API, updating the UI based on the response, and handling errors. Here's an overview of the key components:

#### Constants and DOM Elements
```javascript
const APIKEY = "9b247c6b798a05f299ec654697fafa6d";
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherContainer = document.getElementById("weatherContainer");
const image = document.querySelector(".js-image");
const temperature = document.querySelector(".js-temperature");
const temperatureFeel = document.querySelector(".js-temperature-feel");
const humidity = document.querySelector(".js-humidity");
const weatherStat = document.querySelector(".js-weatherStat");
const cityData = document.querySelector(".js-city");
```
- **APIKEY**: Stores the API key for accessing the OpenWeatherMap API.
- **DOM Elements**: Stores references to various HTML elements used for displaying weather information.

#### Functions

##### `getWeather(APIKEY, cityInput)`
```javascript
async function getWeather(APIKEY, cityInput) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${APIKEY}&units=metric`);
        if (!response.ok) {
            DisplayErr();
            throw new Error('City not found');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
```
- **Purpose**: Fetches weather data from the OpenWeatherMap API based on the user-provided city name.
- **Error Handling**: Displays an error message if the city is not found or if there's an issue with the API request.

##### `updateWeather(json)`
```javascript
function updateWeather(json) {
    try {
        temperature.innerHTML = `${json.main.temp}°C`;
        temperatureFeel.innerHTML = `${json.main.feels_like}°C`;
        humidity.innerHTML = `${json.main.humidity}%`;
        weatherStat.innerHTML = `${json.weather[0].main}`;
        cityData.innerHTML = `${json.name}, ${json.sys.country}`;

        switch (json.weather[0].main) {
            case "Clear":
                image.src = "images/clear.png";
                break;
            case "Rain":
                image.src = "images/rain.png";
                break;
            case "Clouds":
                image.src = "images/cloud.png";
                break;
            case "Haze":
            case "Mist":
                image.src = "images/haze.png";
                break;
            case "Snow":
                image.src = "images/snow.png";
                break;
            default:
                image.src = "";
        }
    } catch (error) {
        console.error(error);
    }
}
```
- **Purpose**: Updates the UI with weather information fetched from the API response.
- **Switch Statement**: Sets the appropriate weather image based on the weather condition returned by the API.

##### `DisplayErr()`
```javascript
function DisplayErr() {
    image.src = "images/404.png";
    temperature.innerHTML = ``;
    temperatureFeel.innerHTML = ``;
    humidity.innerHTML = ``;
    weatherStat.innerHTML = ``;
    cityData.innerHTML = `City not found`;
}
```
- **Purpose**: Displays an error message in case the city entered by the user is not found.

#### Event Listeners
```javascript
searchBtn.addEventListener("click", async () => {
    const input = cityInput.value;
    if (input) {
        const result = await getWeather(APIKEY, input);
        if (result) {
            updateWeather(result);
            console.log(result);
        }
        cityInput.value = '';
    } else {
        alert('Please enter a city name');
    }
});
```
- **Purpose**: Listens for the click event on the search button, triggers the API request to fetch weather data, and updates the UI accordingly.

### Conclusion
This documentation provides a comprehensive understanding of how the weather application functions, from UI layout to JavaScript functionality. It demonstrates the integration of an external API (OpenWeatherMap) to retrieve and display real-time weather information based on user input.