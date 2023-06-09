'use strict';
const api_key = "4edadbd8799daee2217f0c40bcdd1c84";
export const fetchData = function(url, callback){
    fetch(`${url}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
};
export const url = {
    currentWeather(latitude, longitude) {
        return `https://api.openweathermap.org/data/2.5/weather?${latitude}&${longitude}&units=metric&lang=sp`
    },
    forecast(latitude, longitude) {
        return `https://pro.openweathermap.org/data/2.5/forecast/hourly?${latitude}&${longitude}&units=metric&lang=sp`
    },
    airQuality(latitude, longitude) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?${latitude}&${longitude}&lang=sp`
    },
    reverseGeo(latitude, longitude) {
        return `http://api.openweathermap.org/geo/1.0/reverse??${latitude}&${longitude}&limit=5&lang=sp`
    },
    directGeo(queryCity) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${queryCity}&limit=5`
    }
}
