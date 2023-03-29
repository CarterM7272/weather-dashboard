var APIKey = "21c0cd1bd705d5d59da38e1aa3e7b33f";
let searchBtn = document.getElementById('#search-button');
var city;
var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=` + APIKey
var cityKeyUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var cityLocationConverter = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=' + APIKey;


function getCity() {

}

function getAPI() {
  fetch(requestURL);
}
getAPI()


