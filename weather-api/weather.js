var url = new URL('http://api.openweathermap.org/data/2.5/weather');
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
function weatherReport(weather) {
    return `
                Current Temprature: ${weather.temprature.current}&#176;C <br>
                Feels Like: ${weather.temprature.feels_like}&#176;C <br>
                Wind Speed: ${weather.wind.speed} m/s <br>
                Humidity: ${weather.humidity}%
            `
}
function fetchWeatherData(data) {
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
async function showWeatherData() {
    var raw_data = await fetch(url);
    var data = await raw_data.json();
    var weather = fetchWeatherData(data);
    var x = document.getElementById("snackbar");
    x.innerHTML = weatherReport(weather);
    x.className = "show";
    setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
}