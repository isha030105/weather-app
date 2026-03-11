const apiKey = "ddca7a61a10aa34fd45ac91ea13f9a37";

document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {

  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    document.getElementById("weatherResult").innerText = "Please enter a city";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerText =
        "Temperature: " + data.main.temp + "°C, Weather: " + data.weather[0].description;
    } else {
      document.getElementById("weatherResult").innerText = "City not found";
    }

  } catch (error) {
    document.getElementById("weatherResult").innerText = "Error fetching data";
  }
}