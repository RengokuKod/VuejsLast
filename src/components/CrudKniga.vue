<template>
    <div class="n">
    <form @submit.prevent="addBook">
    <label for="title">Название:</label>
    <input type="text" id="title" v-model="newBook.title" required>
    <label for="description">Описание:</label>
    <input type="text" id="description" v-model="newBook.description" required>
    <input type="submit" value="Добавить книгу">
    </form>
    <table>
    <tr v-for="(book, index) in books" :key="index">
    <td>{{ book.title }}</td>
    <td>{{ book.description }}</td>
    <td>
    <button @click="editBook(index)">Изменить</button>
    <button @click="deleteBook(index)">Удалить</button>
    </td>
    </tr>
    </table>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    newBook: { title: '', description: '' },
    books: JSON.parse(localStorage.getItem('books')) || [],
    };
    },
    methods: {
    addBook() {
    this.books.push({ ...this.newBook });
    this.newBook = { title: '', description: '' };
    this.saveBooks();
    },
    editBook(index) {
    this.newBook = this.books[index];
    this.books.splice(index, 1);
    this.saveBooks();
    },
    deleteBook(index) {
    this.books.splice(index, 1);
    this.saveBooks();
    },
    saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
    },
    },
    };
    </script>