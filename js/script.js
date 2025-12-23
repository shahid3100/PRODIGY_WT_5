const apiKey = "9e8442781fde6945506223b8185e6504";

function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("location").innerText = data.name;
      document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
      document.getElementById("condition").innerText = data.weather[0].main;
      document.getElementById("wind").innerText = data.wind.speed;
      document.getElementById("humidity").innerText = data.main.humidity;
    })
    .catch(error => {
      alert("City not found. Please check spelling.");
    });
}
