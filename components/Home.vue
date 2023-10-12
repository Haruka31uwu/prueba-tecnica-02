<template>
  <section class="custom-container">
    <div class="row">
      <div class="col-12">
        <img
          src="/assets/images/hero.png"
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
  height: auto;
  max-height: 500px;
}
.hero-text {
  position: absolute;
  top: 30%;
  padding-left:3em;
  display: flex;
  gap: 2em;
  flex-direction: column;
  width: 70%;
}
h1 {
  font-family: Axiforma;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 65px; /* 135.417% */
  word-break: break-all;
  width: 80%
}
button {
  border-radius: 30px;
  background: var(--EVI500,#0193C1);
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  width: 40%;
  border: none;
  height: 45px;
}button:hover{
    background: var(--bs-blue, #0d6efd);
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
    width: 40%;
    border: none;
    height: 45px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
h1,button{
    color: var(--EVI400, #f0f0f0);
}img{
    height: 70%;
    min-height: 520px;
    padding-bottom: 5em;
}
@media (max-width: 1650px) {
 img{
  height: 80%;
  min-height: 620px;
  padding-bottom: 5em;

 }}
@media (max-width: 1046px) {
 img{
  height: 100%;
  min-height: 720px;
  padding-bottom: 10em;

 }
 .hero-text{
  width: 100%;
 }
}
@media (max-width: 746px) {
 img{
  height: 100%;
  min-height: 920px;


 }.custom-container{
  height: 100%;
  max-height: 720px;
 }
 .hero-text{
  width: 100%;
 }
}

@media (max-width: 468px) {
 img{
  height: 100%;
  min-height: 1350px;
  padding-bottom: 20em;

 }.custom-container{
  height: 100%;
  max-height: 1020px;
 }
 .hero-text{
  width: 100%;
 }
}
</style>