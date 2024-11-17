<template>
    <div class="n">
    <h1>Добавить элемент</h1>
    <form @submit.prevent="addItem">
    <input type="text" v-model="newItem.Фамилия" placeholder="Фамилия"><br><br>
    <input type="text" v-model="newItem.Имя" placeholder="Имя"><br><br>
    <input type="text" v-model="newItem.Отчество" placeholder="Отчество"><br><br>
    <input type="number" v-model="newItem.Рост " placeholder="Рост"><br><br>
    <input type="text" v-model="newItem.Должность" placeholder="Должность"><br><br>
    <input type="number" v-model="newItem.Стаж" placeholder="Стаж"><br><br>
    <input type="text" v-model="newItem.Зона_работ" placeholder="Зона_работ"><br><br>
    <input type="text" v-model="newItem.Образование" placeholder="Образование"><br><br>
    <input type="number" v-model="newItem.Возраст" placeholder="Возраст"><br><br>
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
    newItem: {
    Фамилия: '',
    Имя: '',
    Отчество: '',
    Рост : '',
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
async addItem() {
// Загрузка файла
if (this.file) {
let formData = new FormData();
formData.append('file', this.file);
this.newItem.Фото = `/save/rabotnik/${this.file.name}`;
await axios.post('http://77.222.52.42:8001/save/rabotnik/', formData)
.catch(error => {
console.error(error);
});
}
// Отправка данных формы
await axios.post('http://77.222.52.42:8001/Rabotnik/index', this.newItem)
.then(() => {
this.$router.push('/bdtablerab');
})
.catch(error => {
console.error(error);
});
}
    }
    }
    </script>