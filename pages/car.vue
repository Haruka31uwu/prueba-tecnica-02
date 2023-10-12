<template>
    <div>
        <main class="mt-5 py-5">
            <h1 class="text-center">Carrito</h1>
            <div class="main-car w-100 d-flex flex-row flex-md-column justify-content-center ps-5 ">
                
                <div class="car-item " v-for="(item,index) in cartItems" :key="`item-${index}`">
                    <div class="d-flex gap-2">
                        <span class="id">{{ index+1 }}</span>
                        <span class="nombre">{{ item.nombre }}</span>
                        <span class="precio">S/.{{ item.precio_pen }}</span>
                        <span class="precio">${{ item.precio_usd }}</span>
                    </div>
                    <div class="car-item-course ps-3 gap-1 d-flex" v-for="(course,index2) in item.cursos" :key="`cursos-${index2}`" >
                    <span class="id">- {{ course.id }}</span>
                    <span class="nombre">{{ course.nombre }}</span>
                    <span class="duracion">{{ course.duracion }}</span>
                    </div>
                </div>
            </div>

        </main> 
    </div>
</template>
<script>
import {
  getCartTo,
  getCartItemsCo,
  getCartIt
} from "/composables/programs/cart.composable.js";
export default {
  setup() {
    const cartTotal =  getCartTo.value;
    const cartItemsCount = getCartItemsCo.value;
    const cartItems =  getCartIt.value;
    return {
      cartTotal,
      cartItemsCount,
      cartItems
    };
  }
}; 
</script>