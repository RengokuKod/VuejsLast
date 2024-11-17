import 'bootstrap/dist/css/bootstrap.css'
import {createApp} from 'vue'
import App from './components/App.vue'
import router from './router'
import 'bootstrap/dist/js/bootstrap.bundle.js'
createApp(App).use(router).mount('#app')