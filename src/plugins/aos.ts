import {onMounted} from "vue";
import AOS from 'aos';

export default function (aosDelay:number,aosDuration:number) {
    onMounted(() => {
        AOS.init({
            duration: aosDuration,
            delay: aosDelay,
            once: true,
        });
    });
}