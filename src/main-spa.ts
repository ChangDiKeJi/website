import {isDev} from "@/ts/env/packMode.ts";
import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router";

import 'virtual:svg-icons-register';//vite-plugin-svg-icons的虚拟模块
import '@/assets/scss/bootstrap/bs-custom.scss';
import 'bootstrap';
import '@/assets/scss/color/global-color.scss';

export default function (){
    if (isDev) console.info(`[main-spa.ts] 进入`);

    createApp(App)
        .use(router)
        .mount('#app');
}