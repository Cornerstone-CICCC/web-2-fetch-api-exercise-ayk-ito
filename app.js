// YOUR JS CODE HERE
const weather = document.querySelector("#weather");

const getWeather = async () => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const builedHTML = async () => {
  const data = await getWeather();
  const currentWeather = data.current;
  const units = data.current_units;
  const date = new Date(currentWeather.time);

  let weatherHtml = "";
  weatherHtml += `
    <h1>${currentWeather.temperature_2m}${units.temperature_2m}</h1>
    <h3>Wind Speed: ${currentWeather.wind_speed_10m}${units.wind_speed_10m}</h3>
    <h2>${data.timezone}</h2>
    <h3>Last updated: ${date.toLocaleString()}</h3>
    `;

  weather.innerHTML = weatherHtml;
};

builedHTML();
