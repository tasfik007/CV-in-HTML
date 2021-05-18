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

function setWeatherReport({
    name: city,
    main: { temp: temp_cur, feels_like: temp_feels, humidity },
    wind: { speed: wind_speed }
}) {
    $("#city").text(city); $("#temp-cur").text(temp_cur);
    $("#temp-feel").text(temp_feels);
    $("#wind").text(wind_speed); $("#hum").text(humidity);
}

async function fetchWeatherData() {
    var raw_data = await fetch(url);
    var data = await raw_data.json();
    var x = document.getElementById("toast");
    setWeatherReport(data);
    let prev_class = x.className;
    x.className += " show";
    setTimeout(() => { x.className = x.className.replace(prev_class + " show", prev_class); }, 5000);
}