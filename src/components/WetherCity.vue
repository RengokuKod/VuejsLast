<template>
    <div class="n">
    <h1>Данные о погоде</h1>
    <form @submit.prevent="getWeather">
    <label for="city">Город:</label>
    <input type="text" id="city" v-model="city" required>
    <input type="submit" value="Получить погоду">
    </form>
    <div v-if="weatherData">
    <ul>
    <li>Температура: {{ weatherData.main.temp }} °C</li>
    <li>Минимальная температура: {{ weatherData.main.temp_min }} °C</li>
    <li>Максимальная температура: {{ weatherData.main.temp_max }} °C</li>
    <li>Облачность: {{ weatherData.weather[0].description }}</li>
    <li>Время года: {{ vrema }}</li>
    </ul>
    </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
    data() {
    return {
    city: '',
    weatherData: null,
    vrema:'Весна',
    };
    },
    methods: {
    async getWeather() {
    const apiKey = '83bd674712160478ad12751bf630e95c'; // Замените на ваш ключ API
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&lang=ru`);
    this.weatherData = response.data;
    this.vrema;
    this.weatherData.main.temp -= 273.15;
    this.weatherData.main.temp_min -= 273.15;
    this.weatherData.main.temp_max -= 273.15;

    },
    },
    };
    </script>
    