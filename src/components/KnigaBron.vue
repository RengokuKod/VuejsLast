<template>
    <div>
    <table>
    <tr v-for="(book, index) in books" :key="index">
    <td>{{ book.title }}</td>
    <td>
    <button @click="toggleBooking(index)">
    {{ book.isBooked ? 'Отмена бронирования' : 'Забронировать' }}
    </button>
    </td>
    </tr>
    </table>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    books: JSON.parse(localStorage.getItem('books')) || [
    { title: 'Война и мир', isBooked: false },
    { title: 'Солнце на закате', isBooked: false },
    { title: 'Путь самурая', isBooked: false },
    { title: 'Портрет дориана кре', isBooked: false },
    // Добавьте здесь другие книги...
    ],
    };
    },
    methods: {
    toggleBooking(index) {
    this.books[index].isBooked = !this.books[index].isBooked;
    if (this.books[index].isBooked) {
    alert(`Книга "${this.books[index].title}" забронирована`);
    } else {
    alert(`Бронирование книги "${this.books[index].title}" отменено`);
    }
    localStorage.setItem('books', JSON.stringify(this.books));
    },
    },
    };
    </script>