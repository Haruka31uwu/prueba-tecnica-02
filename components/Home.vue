<template>
  <section class="custom-container">
    <div class="row">
      <div class="col-12">
        <img
          src="assets/images/hero.png"
          alt="hero img"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <div class="row ">
      <div class="col-lg-6 col-md-6 col-sm-12 hero-text">
        <h1>
          Descubre la Maravilla de la Naturaleza:Nuestros Cursos para un Mundo
          Más Verde
        </h1>
        <button>Comienza ahora</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.custom-container {
  margin-top: -2em;
  position: relative;
  height: 100%;
  max-height: 500px;
}
.hero-text {
  position: absolute;
  top: 30%;
  padding-left:3em;
  display: flex;
  gap: 2em;
  flex-direction: column;
}
h1 {
  font-family: Axiforma;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 45px; /* 135.417% */
  word-break: break-all;
  width: 80%
}
button {
  border-radius: 30px;
  background: #0193c1;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);

  height: 45px;
}h1,button{
    color: var(--EVI400, #f0f0f0);
}img{
    height: 70%;
    min-height: 520px;
}
</style>