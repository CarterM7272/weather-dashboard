// API key from the OpenWeatherMap website.
var APIKey = "21c0cd1bd705d5d59da38e1aa3e7b33f";
var city;
var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=${APIKey}`;
var cityKeyUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
var cityLocationConverter = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIKey}`;
let dayOneForecast;

document.getElementById('search-button').addEventListener('click', getCity);

function getCity() {
  var searchBarContent = document.getElementById('search-bar').value;
  city = searchBarContent;
  cityKeyUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  fetch(cityLocationConverter)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      const { lat, lon } = data[0];
      requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`;
      getAPI();
    })
    .catch(function (err) {
      console.log(err);
    })
}

function getAPI() {
  fetch(requestURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      const cityData = data.city;
      const forecastList = data.list;


      const cityOverview = document.getElementById('city-name');
      cityOverview.textContent = `${cityData.name} (${forecastList[0].dt_txt})`;


      const cityTemp = document.getElementById('city-temp');
      cityTemp.textContent = `Temp: ${forecastList[0].main.temp} °C`;

      const cityWind = document.getElementById('city-wind');
      cityWind.textContent = `Wind: ${forecastList[0].wind.speed} m/s`;

      const cityHumid = document.getElementById('city-humid');
      cityHumid.textContent = `Humidity: ${forecastList[0].main.humidity}%`;

              // We update the HTML with the 5-day forecast information.
      const eachDayForecast = document.getElementsByClassName("each-day-weather");
      for (let i = 0; i < 5; i++) {
        const forecastIndex = i * 8 + 4;

          // We extract the relevant data for the day from the weather data.
        const date = new Date(forecastList[forecastIndex].dt_txt);
        const temp = forecastList[forecastIndex].main.temp;
        const wind = forecastList[forecastIndex].wind.speed;
        const humidity = forecastList[forecastIndex].main.humidity;

        // We update the HTML elements with the forecast information for each day.
        eachDayForecast[i].innerHTML = `
          <p>Date: ${date.toDateString()}</p>
          <p>Temperature: ${temp} °C</p>
          <p>Wind: ${wind} m/s</p>
          <p>Humidity: ${humidity}%</p>
        `;
      }
    })
    .catch(function (err) {
      console.log(err);
    })
}

getAPI();

getDate = () => {
  dayOneForecast = `${new Date()}`;
  return dayOneForecast;
}

getDate();