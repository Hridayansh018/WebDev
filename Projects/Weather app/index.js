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

    // removing tags

    const rmtemp = document.querySelector(".temp")
    const rmtempfeel = document.querySelector(".feel")
    const rmhum = document.querySelector(".hum")


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

    async function getWeatherforcast(APIKEY, cityInput) {
        try {
            const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${APIKEY}&units=metric`);
            if (!forecast.ok) {
                DisplayErr();
                throw new Error('City not found');
                
            }
            return await forecast.json();
            
        } catch (error) {
            console.error(error);
        }
    }

    searchBtn.addEventListener("click", async () => {
        const input = cityInput.value;
        if (input) {
            const forecast = await getWeatherforcast(APIKEY, input);
            const result = await getWeather(APIKEY, input);
            if (result, forecast) {
                updateWeather(result);
                console.log(result, forecast);
            } cityInput.value = '';
        } else {
            alert('Please enter a city name');
        }
        
    });

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
                    image.src = "images/haze.png";
                    break;
                case "Snow":
                    image.src = "images/snow.png";
                    break;
                case "Mist":
                    image.src = "images/haze.png";
                    break;
                default:
                    image.src = "";
            }}
        catch (error) {
            console.error(error);
        }
    }


    function DisplayErr() {
        image.src = "images/404.png";
        temperature.innerHTML = ``;
        temperatureFeel.innerHTML = ``;
        humidity.innerHTML = ``;
        weatherStat.innerHTML = ``;
        cityData.innerHTML = `City not found`;
        rmhum.innerHTML = ``;
        rmtemp.innerHTML = ``;
        rmtempfeel.innerHTML = ``;
    }