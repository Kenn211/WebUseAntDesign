import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './components/Router/router';
import { Button, message, DatePicker } from 'ant-design-vue';
import i18n from './components/Locales/i18n';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(Antd);
app.use(DatePicker);
app.use(Button);
app.mount('#app');
app.config.globalProperties.$message = message;
