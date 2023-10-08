<template>
    <section>
        <div class="section-title">
        <h2>Cursos que incluye el programa</h2>
        <img src="/assets/images/programs.svg"/>
        </div>
        <div class="section-items">
            <programs-section-program-item v-for="program in programs" :key="program.id" :program="program"/>
        </div>
    </section>
</template>
<style scoped>
section{
    background: var(--EVI-DARK-001, #13131A);
    height: auto;
}img {
  margin-top: -2.2em;
}
</style>