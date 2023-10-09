import { computed } from 'vue';
import {mainStore} from '../store/index.store.js'
const store = mainStore();
export const getDevice=()=>{
    const device=window.addEventListener('resize',()=>{
        if(window.innerWidth<768){
            return 'mobile'
        }else{
            return 'desktop'
        }
    })
    return device
}
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