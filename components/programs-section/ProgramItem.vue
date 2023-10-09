<template>
  <article class="col-xl-7 col-md-8 col-sm-12" v-if="program != null">
    <div class="courses program-container ms-xl-5 ms-lg-4 ms-md-2 ms-sm-0">
      <div
        v-for="(item, index) in program.cursos"
        :key="`course-${program.id}-${index}`"
        class="program-course"
      >
        <div
          class="program-course-num"
          :id="`program-course-${program.id}-${index}`"
        >
          <div class="num-container-ext"></div>
          <div class="num-container-int"></div>
          <div class="num-container-text">{{ index + 1 }}</div>
        </div>
        <div class="program-course-text">
          <h4>{{ item.nombre }}</h4>
          <p>({{ item.duracion }})</p>
        </div>
      </div>
    </div>
  </article>
</template>
<script setup>
const props = defineProps({
  program: {
    type: undefined,
    required: true,
  },
});
</script>
<style scoped>
.program-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.courses {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 2em;
  height: auto;
  width: auto;
  gap: 1em;
}

.program-course {
  border-radius: 30px;
  border: 1px solid var(--EVI-DARK-004, #515166);
  background: var(--EVI-DARK-005, #1c1c24);
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: auto;
  padding: 0.5em 0 0.5em 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
}
.program-course-num {
  position: relative;
  display: flex;
  flex-direction: column;
}
.num-container-ext {
  width: 28.286px;
  height: 28.286px;
  transform: rotate(45.621deg);
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--EVI500, #0193c1);
}
.num-container-int {
  width: 20.899px;
  height: 20.899px;
  transform: rotate(45.621deg);
  flex-shrink: 0;
  border-radius: 3px;
  background: var(--EVI500, #0193c1);
  position: absolute;
  top: 3px;
  left: 4px;
}
.num-container-text {
  position: absolute;
  top:4px;
  left: 35%;
  color: var(--EVI400, #f0f0f0);
  font-family: Rubik;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
}
h4 {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 218.75% */
}
p {
  color: var(--EVIg400, #f0f0f0);
  font-family: Axiforma;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 10px; /* 142.857% */
  margin: 0;
}
</style>