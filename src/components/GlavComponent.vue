    <template>
    <div class="text-center n">
        <div class="contact text-center">
    <h1 class="display-4">Добро пожаловать на сайт Кузнечный цех!</h1>
    </div>
    <img :src="glav1">
    <h3>
    Мы - команда профессионалов, посвятивших свою жизнь искусству ковки. Наш цех - это место, где традиции векового ремесла сочетаются с современными технологиями. 
    </h3>
    <img :src="glav2">
    <h3>
    Мы специализируемся на создании уникальных кованых изделий: от декоративных элементов интерьера до сложных архитектурных конструкций. Наша продукция включает в себя кованые ворота, заборы, лестницы, мебель и многое другое. 
    </h3>
    <img :src="glav3">
    <h3>
        Если у вас есть вопросы или вы хотите обсудить свой проект, не стесняйтесь связаться с нами. Мы всегда рады помочь!
    </h3>
    <h3>
    <p>Телефон информационной поддержки: 73955512104.</p>
    <p>Адрес электронной почты: Kuz_ceh@milk.ru</p>
    <p>Улица Кузнечная, участок 45</p>
    </h3>
    </div>
    </template>
    <script>
    import glav1 from '@/assets/images/glav1.png';
    import glav2 from '@/assets/images/glav2.png';
    import glav3 from '@/assets/images/glav3.png';
    export default {
    name: 'GlavComponent',
    data() {
    return {
    glav1,
    glav2,
    glav3
    };
    },
    }
    </script>
    <style scoped>
    @import './css.css';
    </style>

