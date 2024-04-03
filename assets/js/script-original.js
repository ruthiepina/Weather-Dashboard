// var userFormEl = document.querySelector("#user-form");
// var cityInputEl = document.querySelector("#cityname");
// var weatherContainerEl = document.querySelector("#weather-container");
// var citySearchTermEl = document.querySelector("#city-search-term");

// // var previousCities = JSON.parse(localStorage.getItem("search-history")) || [];

// // var city = "";

// var formSubmitHandler = function (event) {
//    event.preventDefault();
//    var cityName = cityInputEl.value;
//    //    city = cityName;

//    if (cityName) {
//       console.log(cityName);
//       getCityData(cityName);
//       cityInputEl.value = "";
//    } else {
//       window.alert("Please enter a city!");
//    }
// };

// // var displayWeatherDOM = function (weatherForecast) {
// //    var topCardEl = document.createElement("div");
// //    topCardEl.classList = "card col-12";
// //    topCardEl.id = "big-card";

// //    var todaysData = document.createElement("div");
// //    todaysData.classList = "card-header col-12";

// //    var tempRow = document.createElement("div");
// //    tempRow.classList = "flex-row";

// //    var cityAndDate = document.createElement("h2");
// //    cityAndDate.classList = "flex-col col-12 col-md-5";
// //    cityAndDate.textContent = weatherForecast[0].city + " " + moment(weatherForecast[0].date).format("l") + " ";

// //    var imgEl = document.createElement("img");
// //    imgEl.classList = "flex-col col-12 col-md-2";
// //    imgEl.src = "https://openweathermap.org/img/wn/" + weatherForecast[0].icon + ".png";

// //    console.log(cityAndDate);
// //    var weatherInfo = document.createElement("ul");
// //    weatherInfo.classList = "col-12 list-group";

// //    var liTempEl = document.createElement("li");
// //    liTempEl.textContent = "Temp: " + weatherForecast[0].temp + " °F";
// //    weatherInfo.appendChild(liTempEl);

// //    var liWindEl = document.createElement("li");
// //    liWindEl.textContent = "Wind: " + weatherForecast[0].windSpeed + " MPH";
// //    weatherInfo.appendChild(liWindEl);

// //    var liHumidEl = document.createElement("li");
// //    liHumidEl.textContent = "Humidity: " + weatherForecast[0].humidity + " %";
// //    weatherInfo.appendChild(liHumidEl);

// //    var uvIndexEl = document.createElement("li");
// //    uvIndexEl.textContent = "UV Index: " + weatherForecast[0].uvIndex;
// //    uvIndexEl.classList = weatherForecast[0].uvColor;
// //    weatherInfo.appendChild(uvIndexEl);

// //    tempRow.appendChild(cityAndDate);
// //    tempRow.appendChild(imgEl);
// //    todaysData.appendChild(tempRow);
// //    topCardEl.appendChild(todaysData);
// //    topCardEl.appendChild(weatherInfo);
// //    rightSideEl.appendChild(topCardEl);
// // };

// // var getOneDayData = function (groupData, index) {
// //    console.log(groupData, index);
// //    const CURRENT_DAY = 0;
// //    const MODERATE = 3.0;
// //    const HIGH = 6.0;
// //    const VERY_HIGH = 8.0;
// //    const EXTREME = 11.0;

// //    var weatherData = {
// //       city: city,
// //       date: "",
// //       icon: "",
// //       temp: "",
// //       humidity: "",
// //       windSpeed: "",
// //       uvIndex: "",
// //       uvColor: "",
// //       description: "",
// //    };

// //    if (index === CURRENT_DAY) {
// //       weatherData.date = new Date(groupData.dt * 1000);
// //       weatherData.icon = groupData.weather[0].icon;
// //       weatherData.temp = groupData.temp;
// //       weatherData.humidity = groupData.humidity;
// //       weatherData.windSpeed = groupData.wind_speed;
// //       weatherData.uvIndex = parseFloat(groupData.uvi);
// //       weatherData.description = groupData.weather[0].description;
// //    } else {
// //       weatherData.date = new Date(groupData[index].dt * 1000);
// //       weatherData.icon = groupData[index].weather[0].icon;
// //       weatherData.temp = groupData[index].temp;
// //       weatherData.humidity = groupData[index].humidity;
// //       weatherData.windSpeed = groupData[index].wind_speed;
// //       weatherData.uvIndex = parseFloat(groupData[index].uvi);
// //       weatherData.description = groupData[index].weather[0].description;
// //    }
// //    if (weatherData.uvIndex < MODERATE) {
// //       weatherData.uvColor = "green";
// //    } else if (weatherData.uvIndex < HIGH) {
// //       weatherData.uvColor = "orange";
// //    } else if (weatherData.uvIndex < VERY_HIGH) {
// //       weatherData.uvColor = "red";
// //    } else if (weatherData.uvIndex < EXTREME) {
// //       weatherData.uvColor = "purple";
// //    }
// //    return weatherData;
// // };

// var getCityData = function (city) {
//    var locationUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=57b0d4c3e88f3dca902e10388d28c5fd";
//    fetch(locationUrl)
//       .then((response) => response.json())
//       .then((data) => {
//          var latitude = data[0].lat;
//          var longitude = data[0].lon;
//          var cityName = data[0].name;

//          // if (previousCities.indexOf(cityName) === -1) {
//          //    previousCities.push(cityName);
//          //    localStorage.setItem("previousCities", JSON.stringify(previousCities));
//          // }
//          getWeather(latitude, longitude);
//       });
// };

// var getWeather = function (latitude, longitude) {
//    document.getElementById("right-container").innerHTML = "";
//    var weatherUrl =
//       "https://api.openweathermap.org/data/2.5/weather?lat=" +
//       latitude +
//       "&long=" +
//       longitude +
//       "&units=imperial&appid=57b0d4c3e88f3dca902e10388d28c5fd";
//    fetch(weatherUrl)
//       .then((response) => response.json())
//       .then((data) => {
//          console.log(data);
//          // specific labeling for calling temp, humidity, and windspeed
//          var temp = data.main.temp;
//          var ptemp = document.createElement("p");
//          ptemp.textContent = "temperature: " + temp;
//          var humidity = data.main.humidity;
//          var phum = document.createElement("p");
//          phum.textContent = "humidity: " + humidity;
//          var windspeed = data.wind.speed;
//          var pwind = document.createElement("p");
//          pwind.textContent = "windspeed: " + windspeed;

//          document.getElementById("current-weather").append(ptemp, phum, pwind);
//          document.getElementById("current-city").textContent = data.name;
//          //  displayWeatherDOM(data, city);
//          displaySearchHistory();
//       });
//    getForecast(latitude, longitude);
// };

// var getForecast = function (latitude, longitude) {
//    document.querySelector(".five-day-weather").innerHTML = "";
//    var forecastUrl =
//       "https://api.openweathermap.org/data/2.5/forecast?lat=" +
//       latitude +
//       "&lon=" +
//       longitude +
//       "&appid=57b0d4c3e88f3dca902e10388d28c5fd&units=imperial";
//    // fetch(forecastUrl).then(response => response.json()).then(data => {
//    //     console.log(data);
//    fetch(forecastUrl)
//       .then((response) => response.json())
//       .then((data) => {
//          console.log(data);
//          var forecastArray = [];
//          for (var i = 0; i < data.list.length; i++) {
//             var time = data.list[i].dt_txt.split(" ")[1];
//             if (time === "12:00:00") {
//                forecastArray.push(data.list[i]);
//             }
//          }
//          // For loop and code for 5day forecast, display cards.
//          for (var i = 0; i < forecastArray.length; i++) {
//             var temp = forecastArray[i].main.temp;
//             var ptemp = document.createElement("p");
//             ptemp.textContent = "temperature: " + temp;
//             var humidity = forecastArray[i].main.humidity;
//             var phum = document.createElement("p");
//             phum.textContent = "humidity: " + humidity;
//             var windspeed = forecastArray[i].wind.speed;
//             var pwind = document.createElement("p");
//             pwind.textContent = "windspeed: " + windspeed;
//             var cardDiv = document.createElement("div");
//             cardDiv.setAttribute("class", "card xm-5 ");
//             cardDiv.setAttribute("style", "width: 13rem;");
//             var cardBody = document.createElement("div");
//             cardBody.setAttribute("class", "card-body");
//             var cardTitle = document.createElement("h5");
//             cardTitle.setAttribute("class", "card-title");
//             cardBody.append(cardTitle);
//             cardBody.append(ptemp, phum, pwind);
//             cardDiv.append(cardBody);
//             document.querySelector(".five-day-weather").append(cardDiv);
//          }
//       });
// };

// // var getCityData = function (city) {
// //    var apiCity = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=62efdc7a241b222383db3b34e2048bf5";

// //    fetch(apiCity)
// //       .then(function (response) {
// //          console.log(city);
// //          if (response.ok) {
// //             response.json().then(function (data) {
// //                console.log(data);
// //                latitude = data.coord.lat;
// //                longitude = data.coord.lon;
// //                displayWeatherDOM(data, city);
// //                getWeatherData(latitude, longitude);
// //             });
// //          } else {
// //             throw new Error(response.statusText); //
// //          }
// //       })
// //       .catch(function (error) {
// //          // '.catch()' method is being chained onto the end
// //          // to verify connection to API
// //          window.alert("OpenWeather Server Is Not Responding: ", error);
// //       });
// // };

// // var getWeatherData = function (latitude, longitude) {
// //    var apiOneCall =
// //       "https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=62efdc7a241b222383db3b34e2048bf5";

// //    fetch(apiOneCall)
// //       .then(function (response) {
// //          if (response.ok) {
// //             // console.log(response);
// //             response.json().then(function (data) {
// //                console.log("OneCall Data: ", data);
// //                var weatherForecast = [];
// //                // Loop to push 5 day forecast to our object array
// //                const CURRENT_DAY = 0;
// //                const FORECAST_DAYS = 6;
// //                weatherForecast.push(getOneDayData(data.current, CURRENT_DAY));
// //                for (var forecastDay = 1; forecastDay < FORECAST_DAYS; forecastDay++) {
// //                   weatherForecast.push(getOneDayData(data.daily, forecastDay));
// //                }
// //                console.log("Weather Forecast: ", weatherForecast);
// //                displayWeatherDOM(weatherForecast);
// //             });
// //          } else {
// //             throw new Error(response.statusText); //
// //          }
// //       })
// //       .catch(function (error) {
// //          window.alert("OpenWeather Server Is Not Responding: ", error);
// //       });
// // };

// userFormEl.addEventListener("submit", formSubmitHandler);
