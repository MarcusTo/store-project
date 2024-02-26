import { createApp } from 'vue'
import '@/assets/style.css'
import App from './App.vue'
import router from '@/router';
import 'primeicons/primeicons.css'
import i18n from './config/18n.config';


const app = createApp(App);

app.use(router);
app.use(i18n)
app.mount('#app');