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

function setWeatherReport(weatherData) {
    let children = $("#toast > span");
    for (let i = 0; i < children.length; i++) {
        $("#" + children[i].id).text(weatherData[i]);
    }
}
function extractWeatherData(data) {
    return [data.name, kToC(data.main.temp), kToC(data.main.feels_like),
    data.wind.speed, data.main.humidity];
}
async function fetchWeatherData() {
    var raw_data = await fetch(url);
    var data = await raw_data.json();
    var weather = extractWeatherData(data);
    var x = document.getElementById("toast");
    setWeatherReport(weather);
    let prev_class = x.className;
    x.className += " show";
    setTimeout(() => { x.className = x.className.replace(prev_class + " show", prev_class); }, 5000);
}