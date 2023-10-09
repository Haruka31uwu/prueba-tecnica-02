<template>
  <section id="courses-section">
    <div class="section-title">
      <h2>Cursos que incluye el programa</h2>
      <img src="/assets/images/programs.svg" />
    </div>
    <div class="section-items row ">
      <programs-section-program-item
        :program="programSelected"
      />
       <programs-section-program-inversion 
       :program="programSelected"/>
    </div>
   
  </section>
</template>
<script >
import programsJson from "/src/data/programs.json";
import { setProgramSelected,getProgramSelected } from "/composables/programs/programs.composable.js";
import { ref,computed } from "vue";
export default {
  setup() {
    const programs = ref(programsJson);
    const programSelected=computed(()=>{
      return getProgramSelected()
    }) 
    return {
      programs,
      programSelected,
      setProgramSelected
    };
  },
};
</script>

<style scoped>
section {
  background: var(--EVI-DARK-001, #13131a);
  height: auto;

}
img {
  margin-top: -2.2em;
  max-width: 80%;
}.section-items{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 2em;
    height: auto;
    row-gap: 2em;
    
}
</style>