import axios from 'axios';
const API_KEY = 'aa7fb2b5e250e35b9d337d517eeac7a0';


const WeatherApi = {
    getWeatherApiCall(city) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => response)
            .catch((error) => {
                console.log(error, 'Error message get');
            });
    },
    getWeatherByLocationApiCall(lat, lon) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            .then(response => {
                return response;
            })
            .catch((error) => {
                console.log(error, 'Error message get by location')
            })
    }
};

export default WeatherApi;