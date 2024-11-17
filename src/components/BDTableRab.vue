<template>
    <button @click="addItem" class="new-button">Добавить нового работника</button>
    
    <div id="employers">
    <table>
    <tr>
    <th>id</th>
    <th>Фамилия</th>
    <th>Имя</th>
    <th>Отчество</th>
    <th>Рост</th>
    <th>Должность</th>
    <th>Стаж</th>
    <th>Зона_работ</th>
    <th>Образование</th>
    <th>Возраст</th>
    <th>Фото</th>
    </tr>
    <tr v-for="(item, index) in info" :key="index">
    <td>{{ item.id }}</td>
    <td>{{ item.Фамилия }}</td>
    <td>{{ item.Имя }}</td>
    <td>{{ item.Отчество }}</td>
    <td>{{ item.Рост}}</td>
    <td>{{ item.Должность}}</td>
    <td>{{ item.Стаж}}</td>
    <td>{{ item.Зона_работ}}</td>
    <td>{{ item.Образование}}</td>
    <td>{{ item.Возраст}}</td>
    <td><img :src="`http://77.222.52.42:8001${item.Фото}`" style="width: 80%; height: auto" /></td>
    <td>
<button @click="editItem(item)" class="red-button">Редактировать</button><br><br>
<button @click="deleteItem(item.id)" class="del-button">Удалить</button>
</td>
</tr>
    </table>
    </div>
    </template>
     <style scoped>
     
     .new-button {
     background-color: #4CAF50; /* Green */
     border: none;
     color: white;
     padding: 15px 80px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
     }
     .red-button {
     background-color:blue; /* Red */
     border: none;
     color: white;
     padding: 10px 30px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 12px;
     }
     .del-button {
     background-color: #f44336; /* Red */
     border: none;
     color: white;
     padding: 10px 30px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 12px;
     }
     </style>
 <script>
 import axios from 'axios'
 
 export default {
 el: '#employers',
 data() {
 return {
 info: []
 }
 },
 methods: {
 editItem(item) {
    this.$router.push(`/edititemrab/${item.id}`)
 // Здесь вы можете перенаправить пользователя на страницу редактирования
 // или открыть модальное окно с формой для редактирования
 },
 deleteItem(id) {
 if (window.confirm('Вы уверены, что хотите удалить этот элемент?')) {
 // Если пользователь нажал OK, отправьте запрос DELETE на ваш сервер
 axios
 .delete(`http://77.222.52.42:8001/Rabotnik/index/${id}`)
 .then(() => {
 // После успешного удаления вы можете удалить элемент из списка
 this.info = this.info.filter(item => item.id !== id);
 })
 .catch((error) => {
 console.error(error)
 })
 }
 },
 addItem() {
    this.$router.push('/additemrab')
 // Здесь вы можете перенаправить пользователя на страницу добавления
 // или открыть модальное окно с формой для добавления
 }
 },
 mounted() {
 axios
 .get('http://77.222.52.42:8001/Rabotnik/index')
 .then((response) => {
 this.info = response.data
 })
 .catch((error) => {
 console.error(error)
 })
 }
 }
 </script>
 
 
    <style scoped>
    th {
    border: 1px solid #333;
    border-color: #333;
    background-color: darkgray;
    color: red;
    }
    
    table {
    margin-left: auto;
    margin-right: auto;
    background-color: lightgray;
    }
    td,
    th {
    padding: 10px;
    border: 1px solid #333;
    margin: 10px 0;
    text-align: center;
    color: #333;
    border-color: #333;
    }
    </style> 