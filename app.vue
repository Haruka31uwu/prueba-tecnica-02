<template>
  <NuxtLayout/>
</template>
<script>
import {programsStore} from '/components/programs-section/store/programs.store.js'
import programsJson from "/src/data/programs.json";
export default {
    setup(){
        const store=programsStore()
        onMounted(init)
        function init(){
            store.setProgramSelected(programsJson[0])
        }
     
    }
}
</script>