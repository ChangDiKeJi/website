import {isDev} from "@/ts/env/packMode.ts";
import {ViteSSG} from "vite-ssg";
import App from "@/App.vue";
import router from "@/router";
import {isClient} from "@/ts/env/ssr.ts";

import 'virtual:svg-icons-register';//vite-plugin-svg-icons的虚拟模块
import '@/assets/scss/bootstrap/bs-custom.scss';
import '@/assets/scss/color/global-color.scss';

export default function (){
    if (isDev) console.info(`[main-ssg.ts] 进入`);

    const createApp = ViteSSG(
        App,
        router.options,
        ({})=>{
            if (isClient) {
                import('bootstrap').then(() => {
                    if (isDev)
                        console.log('[main-ssg.ts] Bootstrap Js 已动态载入');
                }).catch(err => {
                    if (isDev)
                        console.error('[main-ssg.ts] Bootstrap Js 动态载入失败：', err);
                });
            }
        },
    );

    return {createApp};
}