import { computed } from 'vue';
import {mainStore} from '../store/index.store.js'
const store = mainStore();

export const scrollToSection=(section)  =>{   
    const element=document.getElementById(section)
    if(element){
        element.scrollIntoView({behavior:'smooth',block:'start'})
    }
}
export const changeTheme=(theme)=>{
    const store=mainStore()
    store.changeTheme(theme)
}
export const getTheme = computed(() => {
    return store.theme
});