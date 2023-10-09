import { defineStore } from "pinia";

export const programsStore = defineStore('programs',{

    // const programSelected=ref(null);
    // const getProgramSelected=()=>programSelected.value;
    // function setProgramSelected(program){
    //     programSelected.value=program;
    // }
    // return {
    //     programSelected,
    //     getProgramSelected,
    //     setProgramSelected
    // }
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