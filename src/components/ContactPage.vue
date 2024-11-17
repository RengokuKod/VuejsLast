    <template>
    <div class="n">
    <h1 class="t">Наши Контакты:</h1>
    <div class="contact">
    <div>
    <h2>Клюев Борис Николаевич </h2>
    <img class="photo" :src="director">
    <p>Должность: Директор</p>
    <p>Номер: 8-952-123-32-33</p>
    <p>Почта: lalka@mail.ru</p>
    </div>
    <div>
    <h2>Веснецов Александр Петрович</h2>
    <img class="photo" :src="zamdir">
    <p>Должность: Зам Директора</p>
    <p>Номер: 8-912-433-32-33</p>
    <p>Почта: bilodelo@mail.ru</p>
    </div>
    <div>
    <h2>Курагина Надежда Констонтиновна</h2>
    <img class="photo" :src="glavbuh">
    <p>Должность: Главный Бухгалтер</p>
    <p>Номер: 8-232-413-53-32</p>
    <p>Почта: dengidengi@mail.ru</p>
    </div>
    <div>
    <h2>Сарахин Иван Степанович</h2>
    <img class="photo" :src="mehan">
    <p>Должность: Главный Механик</p>
    <p>Номер: 8-232-413-53-32</p>
    <p>Почта: dengidengi@mail.ru</p>
    </div>
    <div>
    <h2>Красин Артём Евгеньевич</h2>
    <img class="photo" :src="glavinj">
    <p>Должность: Главный Инжинер</p>
    <p>Номер: 8-232-413-53-32</p>
    <p>Почта: dengidengi@mail.ru</p>
    </div>
    <div>
    <h2>Пражина Екатерина Алексеевна</h2>
    <img class="photo" :src="supervazer">
    <p>Должность: Главный Супервайзер</p>
    <p>Номер: 8-232-413-53-32</p>
    <p>Почта: dengidengi@mail.ru</p>
    </div>
    </div>
    </div>
    </template>
    <script>
    import director from '@/assets/images/director.png';
    import zamdir from '@/assets/images/zamdir.png';
    import glavbuh from '@/assets/images/glavbuh.png';
    import mehan from '@/assets/images/mehan.png';
    import glavinj from '@/assets/images/glavinj.png';
    import supervazer from '@/assets/images/supervazer.png';
    export default {
    name: 'ContactPage',
    data() {
    return {
    director,
    zamdir,
    glavbuh,
    mehan,
    glavinj,
    supervazer
    };
    },
    }
    </script>
    <style scoped>
   @import './css.css';
    </style>


