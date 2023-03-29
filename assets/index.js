var APIKey = "21c0cd1bd705d5d59da38e1aa3e7b33f";
var city;
var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=${APIKey}`;
var cityKeyUrl = "http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=${APIKey}";
var cityLocationConverter = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIKey}';


document.getElementById('search-button').addEventListener('click', getCity);

function getCity() {
  var searchBarContent = document.getElementById('search-bar').value;
  var city = searchBarContent
  fetch(cityLocationConverter)
  .then(function (res) {
    return res.json();
  })
    .then(function (data) {
      console.log(data);
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
      })
        .catch(function (err) {
          console.log(err);
        })
}
getAPI()



