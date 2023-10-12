import { defineStore } from "pinia";

export const programsStore = defineStore('programs',{
    
    state:()=>({
        programSelected:null
    }),
    getters:{
        getProgramSelected:state=>state.programSelected
    },
    actions:{
        setProgramSelected(program){
            this.programSelected=program;
        }
    }

});