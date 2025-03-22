const icon = document.getElementById("weather-icon");
const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");

const satForecast = document.querySelector("#sat-forecast");
const sunForecast = document.querySelector("#sun-forecast");
const monForecast = document.querySelector("#mon-forecast");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=bee988ed6980fe485ab2252c04571479";

const secUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=229bdc203b67b80d1122f6d7f7b1f6cc&units=imperial";


async function getWeather(data) {
  try {
    const dataFetch = await fetch(data);

    if (!dataFetch.ok) {
      throw Error(dataFetch.status())
    }
    const res = await dataFetch.json()
    display(res)
    console.log(res);
  } catch (error) {
    console.error(error.message)
  }
}

function display(data) {
  const iconSrc = `https://openweathermap.org/img/wn/01d.png`;
  temp.innerHTML = `${data.main.temp}&deg;F`;
  desc.innerText = data.weather[0].description;

  const img = document.createElement("img");
  img.setAttribute("src", iconSrc);
  img.setAttribute("alt", "Weather icon");
  icon.appendChild(img)
}
getWeather(url)

async function getWeatherForcast(data) {
  try {
    const dataFetch = await fetch(data);

    if (!dataFetch.ok) {
      throw Error(`Error ${dataFetch.status}`);
    }
    const res = await dataFetch.json()
    displayWeatherForecast(res);
    console.log(res);
  } catch (error) {
    console.error(error.message)
  }
}

function displayWeatherForecast(data) {
  satForecast.innerHTML = `${data.list[0].main.temp}&deg;F`;
  sunForecast.innerHTML = `${data.list[8].main.temp}&deg;F`;
  monForecast.innerHTML = `${data.list[16].main.temp}&deg;F`;

}
getWeatherForcast(secUrl);