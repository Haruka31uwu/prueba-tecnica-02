<template>
  <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <div class="container-fluid">
      <NuxtLink to="/">
        <img src="/assets/images/logo.svg" />
      </NuxtLink>
      <a class="d-flex gap-2 align-items-center" href="#">
        <svg
          :fill="theme === 'dark' ? '#515166' : '#000000'"
          version="1.1"
          id="theme-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30px"
          height="30px"
          viewBox="0 0 45.74 45.74"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <path
                      d="M12.2,15.267c0-3.322,0.896-6.43,2.448-9.113c0.376-0.649-0.191-1.451-0.918-1.265
						C5.35,7.041-0.711,14.961,0.067,24.179c0.736,8.701,7.768,15.803,16.463,16.617c6.033,0.565,11.517-1.811,15.221-5.848
						c0.5-0.546,0.073-1.432-0.666-1.401c-0.196,0.009-0.395,0.013-0.594,0.013C20.389,33.56,12.2,25.371,12.2,15.267z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    d="M23.144,5.6l0.917,2.633l2.788,0.061c0.354,0.008,0.498,0.456,0.218,0.669l-2.221,1.687l0.805,2.669
					c0.104,0.338-0.279,0.614-0.568,0.414l-2.292-1.59l-2.29,1.59c-0.29,0.201-0.669-0.076-0.569-0.414l0.805-2.669l-2.221-1.687
					c-0.28-0.213-0.134-0.661,0.218-0.669l2.788-0.061L22.44,5.6C22.556,5.267,23.027,5.267,23.144,5.6z"
                  />
                </g>
                <g>
                  <path
                    d="M40.26,26.44l0.881,2.53l2.679,0.057c0.389,0.009,0.549,0.502,0.24,0.737l-2.134,1.621l0.772,2.564
					c0.111,0.371-0.309,0.677-0.627,0.454l-2.201-1.527l-2.2,1.527c-0.318,0.223-0.739-0.083-0.626-0.454l0.772-2.564l-2.133-1.621
					c-0.31-0.234-0.149-0.729,0.238-0.737l2.679-0.057l0.884-2.53C39.612,26.074,40.131,26.074,40.26,26.44z"
                  />
                </g>
                <g>
                  <path
                    d="M39.926,8.098l1.325,3.799l4.021,0.086c0.452,0.01,0.639,0.584,0.278,0.858l-3.204,2.434l1.162,3.853
					c0.131,0.433-0.356,0.788-0.729,0.529l-3.306-2.294l-3.305,2.294c-0.372,0.259-0.86-0.097-0.729-0.529l1.161-3.853l-3.205-2.434
					c-0.358-0.273-0.172-0.849,0.279-0.858l4.022-0.086l1.324-3.799C39.173,7.672,39.776,7.672,39.926,8.098z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>
    <NuxtLink to="/car"
        style="
          position: relative;
          display: flex;
          align-items: center;
          column-gap: 0.5em;
        "
      >

          <svg
            :fill="theme === 'dark' ? '#515166' : '#000000'"
            class="car"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30px"
            height="30px"
            viewBox="0 0 902.86 902.86"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
            M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                />
                <path
                  d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
            c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
            c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
            C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
            c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
            M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
            S619.162,694.432,619.162,716.897z"
                />
              </g>
            </g>
          </svg>
          
        </NuxtLink>
          <div class="cart-items" v-if="getCartTonotZero">
            <span class="cart-total">S/. {{ getCartTo }}</span>
          </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="28"
          viewBox="0 0 39 28"
          fill="none"
        >
          <path
            d="M2 2H37"
            stroke="#F0F0F0"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M2 14H37"
            stroke="#F0F0F0"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M2 26H37"
            stroke="#F0F0F0"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div
          class="navbar-items w-md-100 mx-md-auto justify-content-center justify-content-lg-between"
        >
          <a class="navbar-brand d-none d-lg-flex" href="#"></a>
          <ul class="d-flex flex-column flex-lg-row">
            <li class="nav-item" @click="changeThemeHandler"></li>
            <li class="nav-item">
              <a class="nav-link nav-link-custom" href="#">Inicio</a>
            </li>
            <li class="nav-item" @click="programsOpen = !programsOpen">
              <a class="nav-link nav-link-custom" href="#"
                >Cursos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    d="M0.999999 1L7 7L13 1"
                    stroke="#515166"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>

              <ul
                v-show="programsOpen"
                class="programs-list"
                v-if="getProgramSel != null"
              >
                <li
                  :style="
                    getProgramSel.id == program.id
                      ? 'color:var(--EVI500, #0193c1);'
                      : 'color:var(--EVI400, #ffffff);'
                  "
                  v-for="(program, index) in programs"
                  :key="`program-${index}`"
                  @click="setProgramSelectedHandler(program)"
                >
                  <hr v-if="program.id != 1" />
                  {{ program.nombre }}
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-custom" href="#">Sobre Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import {
  getPrograms,
  setProgramSelected,
  getProgramSelected,
} from "/composables/programs/programs.composable.js";
import {
  getCartTo,
  getCartItemsCo,
  getCartIt,
} from "/composables/programs/cart.composable.js";

import { scrollToSection, changeTheme, getTheme } from "/composables/index.js";
import { ref, computed } from "vue";
export default {
  setup() {
    let programsOpen = ref(false);
    let cartOpen = ref(false);
    const theme = getTheme;
    const programs = computed(() => {
      return getPrograms();
    });
    const getProgramSel = computed(() => {
      return getProgramSelected();
    });
    const getCartT = getCartTo;
    const getCartItemsC = getCartItemsCo;
    const getCartI = getCartIt.value;
    const getCartTonotZero = computed(() => {
      return getCartTo.value > 0;
    });
    function scrollToSectionHandler(section) {
      scrollToSection(section);
    }
    function setProgramSelectedHandler(program) {
      setProgramSelected(program), scrollToSectionHandler("courses-section");
    }

    function changeThemeHandler() {
      if (theme.value === "dark") {
        changeTheme("light");
        return;
      }
      changeTheme("dark");
    }
    return {
      programsOpen,
      programs,
      setProgramSelected,
      getProgramSel,
      setProgramSelectedHandler,
      changeThemeHandler,
      theme,
      getCartT,
      getCartItemsC,
      cartOpen,
      getCartI,
      getCartTo,
      getCartTonotZero
    };
  },
};
</script>
  <style scoped>
.custom-navbar {
  border-radius: 0px 0px 30px 30px;
  background-color: var(--EVI-DARK-001, #13131a);
  box-shadow: 0px 4px 80px 0px rgba(191, 191, 191, 0.1);
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}
@media (max-width: 970px) {
  .custom-navbar {
    border-radius: 0px 0px 0px 0px;
  }
}
.navbar-items {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.nav-link-custom:hover {
  cursor: pointer;
  color: var(--EVI500, #0193c1);
}
ul {
  display: flex;
  flex-direction: row;
  padding-right: 2em;
  list-style: none;
  margin: 0;
  align-items: center;
}
ul li a {
  color: var(--EVI-DARK-004, #515166);
  text-align: center;
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.programs-list {
  position: absolute;
  background: var(--EVI-DARK-001, #13131a);
  width: auto;
  color: var(--EVI400, #ffffff);
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0.5em 1em;
  border-radius: 0px 0px 10px 10px;
}
.programs-list li {
  width: 100%;
}
.programs-list li:hover {
  color: var(--EVI500, #0193c1) !important;
  cursor: pointer;
}
#theme-icon:hover {
  transform: scale(1.2);
  fill: var(--EVI500, #0193c1);
}
path {
  stroke: var(--EVI400, #ffffff);
}
.car:hover {
  color: var(--EVI500, #0193c1) !important;
  cursor: pointer;
}
.cart-items {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  column-gap: 5px;
  text-decoration: none !important;
  list-style: none;
  border: none;
}
.cart-items span {
  color: var(--EVI400, #f0f0f0) !important;
  font-family: Axiforma;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  z-index: 1;
  text-decoration: none !important;
  list-style: none;
  border: none;
}
.cart-count {
  border-radius: 50%;
  background: var(--EVI500, #0193c1);
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--EVI400, #f0f0f0) !important;
  font-family: Axiforma;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  z-index: 1;
  text-decoration: none !important;
  list-style: none;
  border: none;
}
.cart-total {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  background: var(--EVI500, #0193c1);
  padding: 0px 5px;
}
</style>