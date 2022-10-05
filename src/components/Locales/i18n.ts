import { createI18n } from 'vue-i18n';
import vn from './vn.json';
import en from './en.json';

const messages = {
    vn: vn,
    en: en
};

const i18n = createI18n({
   locale: 'en',
   messages,
});

export default i18n;