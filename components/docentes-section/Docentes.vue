<template>
  <section>
    <div class="section-title">
      <h2>Nuestros Docentes</h2>
      <img src="/assets/images/docentes-item.svg" />
    </div>
    <div class="section-items">
      <docentes-section-docente-item
        v-for="docente in docentes"
        :key="docente.id"
        :docente="docente"
      />
    </div>
  </section>
</template>
<script>
import { getDocentes } from '@/services/docentes.service.js'
import{ref,onMounted} from 'vue'
export default {
  setup(){
    let docentes = ref([])
    onMounted(async()=>{
      try{
        const response = await getDocentes();
        docentes.value = response.data;
      }catch(error){
        console.log(error)
      }
    })
    return{
      docentes
    }
  }
}
</script>
<style scoped>
section {
  background: var(--EVI-DARK-005, #1c1c24);
  box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.2);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2em 0;
}


img {
  margin-top: -2.2em;
}.section-items{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
    margin-top: 2em;
    height: auto;
}
</style>