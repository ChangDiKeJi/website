import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import renderMode from "@/ts/env/renderMode.ts";
import maintenanceTargetRouter from "@/router/maintenanceTarget.router.ts";

const router = createRouter({
    history: (()=>{
        switch (renderMode){
            case 'ssg':
                return import.meta.env.SSR ? createMemoryHistory() : createWebHistory();
            case 'spa':
                return createWebHistory();
            case 'spa-hash':
                return createWebHashHistory();//hash模式，使用'#'内部导航，'#'及后面的内容不会发送给服务器，避免了非'/'时404的情况。
            default:
                throw new Error(`Unknown RENDER_MODE: ${renderMode}`);
        }
    })(),
    routes: [
        {
            path: '/cdkj',
            name: 'home',
            component: ()=>import("@/views/Home/Home.vue"),
        },
        {
            path: '/',
            name: 'home-dqwx',
            component: ()=>import("@/views/Home-dqwx/Home-dqwx.vue"),
        },
        {
            path: '/maintenancelist',
            name: 'maintenanceList',
            component: ()=>import('@/views/MaintenanceList/MaintenanceList.vue'),
        },
        ...maintenanceTargetRouter,
        {
            path: '/contactus',
            name: 'contactUs',
            component: ()=>import("@/views/ContactUs/ContactUs.vue"),
        }
    ],
});

export default router;