let cityHistory = JSON.parse(localStorage.getItem("previousCities")) || [];
var API = "57b0d4c3e88f3dca902e10388d28c5fd";
var searchBtn = document.getElementById("search-btn");
var fiveDayForecastEl = document.querySelector("#five-day-forecast");

var getLocation = function (city) {
   console.log("INSIDE GEOLOCATION");
   var geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API}`;
   fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
         console.log("data:", data[0]);
         var lat = data[0].lat;
         var lon = data[0].lon;

         let cityName = data[0].name;
         console.log("cityName:", cityName);

         console.log("cityName", cityHistory.indexOf(cityName));
         if (cityHistory.indexOf(cityName) === -1) {
            cityHistory.push(cityName);
            localStorage.setItem("previousCities", JSON.stringify(cityHistory));
         }
         getWeather(lat, lon);
      });
};

var getWeather = function (lat, lon) {
   document.getElementById("current-weather").innerHTML = "";

   var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API}`;
   fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
         console.log("data from weatherUrl", data);

         const date = new Date().toJSON().slice(0, 10);
         var pdate = document.createElement("p");
         pdate.textContent = date;

         const imgWeather = document.createElement("img");
         imgWeather.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
         var temp = data.main.temp;
         var ptemp = document.createElement("p");
         ptemp.textContent = "Temperature: " + temp;
         var humidity = data.main.humidity;
         var phum = document.createElement("p");
         phum.textContent = "Humidity: " + humidity;
         var windspeed = data.wind.speed;
         var pwind = document.createElement("p");
         pwind.textContent = "Wind Speed: " + windspeed;

         document.getElementById("current-weather").append(pdate, imgWeather, ptemp, phum, pwind);
         document.getElementById("current-city").textContent = data.name;
         // search history display
         displayCityHistory();
      });
   getForecast(lat, lon);
};

//* 5 day forecast
var getForecast = function (lat, lon) {
   document.querySelector(".five-day-forecast").innerHTML = "";
   var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=imperial`;
   fetch(forecastUrl)
      .then((response) => response.json())
      .then((data) => {
         console.log("forecast", data);

         var forecastArray = [];

         for (var i = 0; i < data.list.length; i++) {
            var time = data.list[i].dt_txt.split(" ")[1];
            if (time === "00:00:00") {
               forecastArray.push(data.list[i]);
            }
         }
         console.log("forcastArray", forecastArray);

         for (var i = 0; i < forecastArray.length; i++) {
            var date = forecastArray[i].dt_txt.split(" ")[0];
            var pdate = document.createElement("p");
            pdate.textContent = date;
            const imgForecast = document.createElement("img");
            imgForecast.src = "https://openweathermap.org/img/wn/" + forecastArray[i].weather[0].icon + "@2x.png";
            var temp = forecastArray[i].main.temp;
            var ptemp = document.createElement("p");
            ptemp.textContent = "Temperature: " + temp;
            var humidity = forecastArray[i].main.humidity;
            var phum = document.createElement("p");
            phum.textContent = "Humidity: " + humidity;
            var windspeed = forecastArray[i].wind.speed;
            var pwind = document.createElement("p");
            pwind.textContent = "Wind Speed: " + windspeed;

            var cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card xm-5 ");
            cardDiv.setAttribute("style", "width: 13rem;");
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            var cardTitle = document.createElement("h5");
            cardTitle.setAttribute("class", "card-title");
            cardBody.append(cardTitle);
            cardBody.append(pdate, imgForecast, ptemp, phum, pwind);
            cardDiv.append(cardBody);
            document.querySelector(".five-day-forecast").append(cardDiv);
         }
      });
};

var displayCityHistory = function () {
   var cityHistoryEl = document.getElementById("city-history");
   cityHistoryEl.innerHTML = "";
   console.log("cityHistory", cityHistory);
   for (var i = 0; i < cityHistory.length; i++) {
      var button = document.createElement("button");
      button.classList.add("city-history-btn");
      button.textContent = cityHistory[i];
      button.setAttribute("value", cityHistory[i]);

      button.addEventListener("click", function () {
         console.log("this", this);
         getLocation(this.value);
      });

      cityHistoryEl.appendChild(button);
   }
};
displayCityHistory();

searchBtn.addEventListener("click", () => {
   console.log("**********************************************");
   let cityName = document.getElementById("cityInput").value;
   console.log("cityName:", cityName);
   getLocation(cityName);
});
