<template>
    <div>
    <h2>Вход</h2>
    <input type="text" v-model="username" placeholder="Email почта">
    <input type="password" v-model="password" placeholder="Пароль">
    <button @click="login">Войти</button>
    <p v-if="message">{{ message }}</p>
    </div>
    </template>

    <script>
    import { initializeApp } from 'firebase/app';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

    // TODO: замените настройки на свои настройки Firebase
    const firebaseConfig = {
    apiKey: "AIzaSyCS1MEutdC8sWysXWH2_CTMoMhLfH6Zju0",
    authDomain: "vueprog-38816.firebaseapp.com",
    projectId: "vueprog-38816",
    storageBucket: "vueprog-38816.appspot.com",
    messagingSenderId: "784232157481",
    appId: "1:784232157481:web:c44a433f5cfea4e2cde738",
    measurementId: "G-03KGRXMYNG"
    };

    // Инициализируйте Firebase
    const app = initializeApp(firebaseConfig);

    // Получите экземпляр auth
    const auth = getAuth(app);

    export default {
    data() {
    return {
    username: '',
    password: '',
    message: ''
    }
    },
    methods: {
    async login() {
    try {
    await signInWithEmailAndPassword(auth, this.username, this.password);
    this.message = 'Успешный вход!';
    this.$router.push('/wether');
    } catch (error) {
    this.message = 'Ошибка при входе: ' + error.message;
    }
    }
    }
    }
    </script>

