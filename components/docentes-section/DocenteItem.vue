
import { DocentesSectionDocenteItem } from '#build/components';
<template>
  <div class="item">
    <div class="item-img-container">
        <img src="/assets/images/circle.svg"/>
        <img class="item-img" :src="docente.image" />
    </div>
    <div class="item-info">
      <span class="item-name">{{ docente.name }}</span>
      <span class="item-job">{{ docente.job }}</span>
      <div class="item-view-more">
        Ver más <img src="/assets/images/arrow-view-more.svg" />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  docente: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em;
  gap: 1em;
}.item-img-container{
    position: relative;

}
.item-info {
  display: flex;
  flex-direction: column;
}
.item-name {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.item-job {
  color: var(--EVI-DARK-004, #515166);
  font-family: Axiforma;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.item-view-more {
  margin-top: 0.7em;
  color: #0193c1;
  font-family: Axiforma;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  text-decoration-line: underline;
  display: flex;
  gap: 0.5em;
}.item-img{
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-right: 1em;
    position: absolute;
    left: 10px;
    top: 10px;
}
</style>