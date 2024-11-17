<template>
    <div class="n">
    <h1>Редактировать элемент</h1>
    <form @submit.prevent="editItem">
    <input type="text" v-model="item.Фамилия" placeholder="Фамилия"><br><br>
    <input type="text" v-model="item.Имя" placeholder="Имя"><br><br>
    <input type="text" v-model="item.Отчество" placeholder="Отчество"><br><br>
    <input type="number" v-model="item.Рост" placeholder="Рост"><br><br>
    <input type="text" v-model="item.Должность" placeholder="Должность"><br><br>
    <input type="number" v-model="item.Стаж" placeholder="Стаж"><br><br>
    <input type="text" v-model="item.Зона_работ" placeholder="Зона_работ"><br><br>
    <input type="text" v-model="item.Образование" placeholder="Образование"><br><br>
    <input type="number" v-model="item.Возраст" placeholder="Возраст"><br><br>
    <label>Фото:</label>
    <input type="file" @change="onFileChange"><br><br>
    <button type="submit" class="submit-button">Сохранить</button><br><br>
    <button @click="home()" class="back-button">Вернуться назад</button>    
</form>
    </div>
    </template>
 <style scoped>
 .n {
 display: flex;
 flex-direction: column;
 gap: 10px;
 }
 .submit-button {
 background-color: #4CAF50; /* Green */
 border: none;
 color: white;
 padding: 15px 55px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 }
 .back-button {
 background-color: #f44336; /* Red */
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 }
 </style>
    <script>
    import axios from 'axios'

    export default {
    data() {
    return {
    // Здесь ваши данные формы
    item: {
    Фамилия: '',
    Имя: '',
    Отчество: '',
    Рост: '',
    Должность: '',
    Стаж: '',
    Зона_работ: '',
    Образование: '',
    Возраст: '',
    Фото: ''
    },
    file: null
    }
    },
    methods: {
    home() {
    this.$router.push('/bdtablerab')
    },
    onFileChange(e) {
    this.file = e.target.files[0];
    },
    editItem() {
    // Если файл не выбран, пропустить шаг загрузки файла
    if (this.file) {
    let formData = new FormData();
    formData.append('file', this.file);
    axios.post('http://77.222.52.42:8001/save/rabotnik/', formData)
    .catch((error) => {
    console.error(error);
    });
    this.item.Фото = `/save/rabotnik/${this.file.name}`;
    this.updateUser();
    } else {
    // Если файл не выбран, установить Фото в пустую строку
    this.updateUser();
    }
    },
    updateUser() {
    axios.put(`http://77.222.52.42:8001/Rabotnik/index/${this.item.id}`, this.item)
    .then(() => {
    this.$router.push('/bdtablerab');
    })
    .catch((error) => {
    console.error(error);
    });
    }
    },
    mounted() {
    // Получение текущих данных элемента с сервера
    axios.get(`http://77.222.52.42:8001/Rabotnik/index/${this.$route.params.id}`)
    .then((response) => {
    this.item = response.data;
    })
    .catch((error) => {
    console.error(error);
    })
    }
    }
    </script>

