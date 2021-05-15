//const fetch = require('node-fetch')

var url = new URL('https://api.openweathermap.org/data/2.5/weather');
var params = {
    q: 'dinajpur',
    appid: '22b2fed657cfc2c421b2475e571a24b9'
};
url.search = new URLSearchParams(params).toString();


function kToC(temprature) {
    return (temprature - 273.15).toFixed(2);
}
function hPaToATM(pressure) {
    return (pressure * 0.000987).toFixed(2);
}
function getWeatherReport(weather) {
    return `
                Current Temprature: ${weather.temprature.current}&#176;C <br>
                Feels Like: ${weather.temprature.feels_like}&#176;C <br>
                Wind Speed: ${weather.wind.speed} m/s <br>
                Humidity: ${weather.humidity}%
            `
}
function extractWeatherData(data) {
    return {
        description: data.weather[0].description,
        temprature: {
            current: kToC(data.main.temp),
            max: kToC(data.main.temp_max),
            min: kToC(data.main.temp_min),
            feels_like: kToC(data.main.feels_like)
        },
        humidity: data.main.humidity,
        pressure: hPaToATM(data.main.pressure),
        wind: data.wind
    };
}
async function fetchWeatherData() {
    var raw_data = await fetch(url);
    var data = await raw_data.json();
    var weather = extractWeatherData(data);
    var x = document.getElementById("toast");
    x.innerHTML = getWeatherReport(weather);
    let prev_class = x.className;
    x.className += " show";
    setTimeout(() => { x.className = x.className.replace(prev_class + " show", prev_class); }, 3000);
}