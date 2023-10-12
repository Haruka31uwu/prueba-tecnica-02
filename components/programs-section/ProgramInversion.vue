<template>
  <article v-if="program != null" class="col-xl-5 col-md-4 col-sm-12">
    <div class="article-content">
      <div class="program-inversion">
        <span>Inversion</span>
        <div>
          <span>${{ program.precio_usd }}</span>
          <span>(Perú: S/{{ program.precio_pen }})</span>
          <p>!Pregunta por nuestros descuentos!</p>
          <button class="btn-cuz btn-cuz-white" :disabled="getItemInCart(program)" @click="addToCartStoreStorage(program)" :style="getItemInCart(program)?'background-color:var(--EVI-DARK-004,#515166)!important':''">
            <img src="/assets/images/car.svg" v-if="!getItemInCart(program)"/>

            <span v-if="!getItemInCart(program)">Agregar al carrito</span>
            <span v-else>Programa en el carrito</span>
          </button>
        </div>
        <hr width="100%" />
      </div>
      <div class="contact">
        <p>Si tienes alguna duda o necesitas mas información, contáctanos:</p>
        <button class="btn-cuz btn-cuz-white">
          <img src="/assets/images/whats.svg" /><span>Ir a Whatsapp (+51 990 888 777)</span>
        </button>
        <button class="btn-cuz btn-cuz-sky-blue-outlined">
          <img src="/assets/images/info.svg" /><span
            >Ir a Preguntas Frecuentes</span
          >
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import {addToCart,getCartItems}  from "/composables/programs/cart.composable.js"
const getCartI= getCartItems
const props = defineProps({
  //if null set object {}
  program: {
    type: undefined,
    required: true,
  },

});
function addToCartStoreStorage(program) {
  console.log(program);

  addToCart(program)
}
function getItemInCart(program){
    return getCartI.value.filter(item => item.id == program.id).length>0
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0;
  padding: 2em 0 4em 0;
}
.article-content {
  border-radius: 30px 0px 0px 30px;
  background: #0193c1;
  padding: 2em 1em 2em 2em;
  width: 80%;
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
p {
  color: var(--EVI-DARK-001, #13131a);
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.btn-cuz {
  border-radius: 30px;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  max-width: 350px;
  height: auto;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
  border: none;
}.btn-cuz-white:hover{
    background: var(--EVI-LIGHT-001, #D5D3D3);
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    width: 100%;
    max-width: 350px;
    height: auto;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-shrink: 0;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.btn-cuz-sky-blue-outlined {
  border-radius: 30px;
  border: 1px solid var(--EVI400, #f0f0f0);
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  background: transparent;
}
.btn-cuz span {
  color: var(--EVI500, #0193c1);
  text-align: center;
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.btn-cuz-sky-blue-outlined span {
  color: var(--EVI400, #f0f0f0);
}
</style>