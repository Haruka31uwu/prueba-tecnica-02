<template>
  <section>
    <span class="section-text"
      >Estamos impulsados por la firme creencia de que cada uno de nosotros
      puede marcar la diferencia y contribuir a un mundo mas sostenible</span
    >
    <div class="indicators">
      <div
        class="indicators-item"
        v-for="(item, index) in indicators"
        :key="`indicators-item-${index}`"
      >
      <div class="indicators-item-container">
        <span
          class="indicators-item-counter"
          :id="`indicator-counter-${index}`"
          >{{ item.counter }}</span
        >
        <span class="indicators-item-text" :id="`indicator-text-${index}`">{{
          item.text
        }}</span>
      </div>
      <div class="indicators-divider" v-if="index!=indicators.length-1"></div>
      </div>

    </div>
  </section>
</template>
  <script setup>
import { ref } from "vue";

const indicators = ref([
  {
    counter: 25,
    text: "Cursos Online",
  },
  {
    counter: 14,
    text: "Programas de Formación",
  },
  {
    counter: 12,
    text: "Alianzas",
  },
]);
</script>
  
<style scoped>
section {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--EVI-DARK-001, #13131a);
  height: 400px;
}
.indicators {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 100px;
  background: var(--EVI-DARK-005, #1c1c24);
  box-shadow: 0px 8px 80px 0px rgba(0, 0, 0, 0.5);
  width: 80%;
  height: 78px;
  flex-shrink: 0;
  margin-top: 2em;
}
.indicators-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
}.indicators-item-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.indicators-divider{
    width: 1px;
    height: 65%;
    background: var(--EVI-DARK-004, #515166);
}
.indicators-item-text {
  color: var(--EVI400, #f0f0f0);
  text-align: center;
  font-family: Axiforma;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 125% */
}
.indicators-item-counter {
  color: var(--EVI500, #0193c1);
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 62.5% */
}
.section-text {
  color: var(--EVI400, #f0f0f0);
  text-align: center;
  font-family: Axiforma;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 175% */
  width: 80%;
}
</style>