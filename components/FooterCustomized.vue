<template>
  <footer class="row d-flex align-items-start py-5" style="width: 100vw">
    <div
      class="d-flex justify-content-center justify-content-md-center justify-content-xl-evenly col-sm-12 col-md-5 col-lg-6 align-items-center"
    >
      <img
        src="/assets/images/logo.svg"
        width="200px"
        height="80%"
        class="me-md-2 me-lg-5 me-sm-5 me-1"
      />
      <div
        class="footer-section-main footer-section flex-md-column d-none d-md-flex"
      >
        <h5 class="d-sm-none d-md-flex">Navega</h5>
        <div class="flex-row d-flex">
          <ul>
            <li>
              <a href="#">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#">Acerca de Nosotros</a>
            </li>
            <li>
              <a href="#">Trabaja con Nosotros</a>
            </li>
          </ul>
          <div
            class="divider-vertical d-none d-xl-flex col-md-1 ms-1 ms-md-3 ms-xl-5"
          ></div>
        </div>
      </div>
      <div class="footer-contacto d-sm-flex d-md-none flex-column">
        <h5 class="">Contacto</h5>
        <div class="d-flex flex-column gap-2">
          <div class="gap-2 d-flex align-items-center">
            <img src="/assets/images/mail.svg" /><span
              >ejemploabc@gmail.com</span
            >
          </div>
          <div class="gap-1 d-flex align-items-center">
            <img src="/assets/images/phone.svg" /><span>+51 78945646</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-75 divider d-flex d-md-none"></div>
    <div
      class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-center col-sm-12 col-md-7 col-lg-5 gap-lg- gap-md-1 gap-sm-4"
    >
      <div class="footer-contacto d-none d-md-flex flex-md-column">
        <h5 class="d-none d-md-flex">Contacto:</h5>
        <div class="d-flex flex-row">
          <div class="d-flex flex-column gap-2">
            <div class="gap-2 d-flex align-items-center">
              <img src="/assets/images/mail.svg" /><span
                >ejemploabc@gmail.com</span
              >
            </div>
            <div class="gap-1 d-flex align-items-center">
              <img src="/assets/images/phone.svg" /><span>+51 78945646</span>
            </div>
          </div>
          <div
            class="divider-vertical d-none d-xl-flex col-md-1 ms-1 ms-md-2 ms-xl-5"
          ></div>
        </div>
      </div>

      <div
        class="footer-section-main footer-section d-sm-flex d-md-none w-100 justify-content-center"
      >
        <h5 class="d-none">Navega</h5>
        <ul class="w-50 mx-auto text-center w-100">
          <li>
            <a href="#">Preguntas Frecuentes</a>
            <div class="w-50 divider d-flex d-md-none"></div>
          </li>
          <li>
            <a href="#">Acerca de Nosotros</a>
            <div class="w-50 divider d-flex d-md-none"></div>
          </li>
          <li>
            <a href="#">Trabaja con Nosotros</a>
          </li>
        </ul>
      </div>
      <div class="w-75 divider d-flex d-md-none"></div>

      <div class="d-flex flex-column text-center">
        <h5>Siguenos en nuestras redes</h5>
        <ul
          class="d-flex flex-row gap-4 justify-content-center align-items-center mt-3"
        >
          <li>
            <img src="/assets/images/facebook.svg" />
          </li>
          <li>
            <img src="/assets/images/instagram.svg" />
          </li>
          <li>
            <img src="/assets/images/youtube.svg" />
          </li>
          <li>
            <img src="/assets/images/linkedin.svg" />
          </li>
          <li>
            <img src="/assets/images/tiktok.svg" />
          </li>
          <li>
            <img src="/assets/images/whats.svg" />
          </li>
        </ul>
      </div>
    </div>
    <div
      class="terms-conditions d-flex flex-row align-items-center gap-2 d-md-flex d-none"
    >
      <span>Terminos y condiciones</span>
      <div
        style="height: 25px; background: var(--EVI400, #f0f0f0); width: 1px"
      ></div>
      <span> ©2023 nombredelaempresa - All Rights Reserved</span>
    </div>
    <div
      class="terms-conditions-mobile mt-4 d-flex flex-row align-items-center gap-2 d-md-none d-flex justify-content-center gap-2"
    >
      <span>Libro de reclamaciones</span>
      <div
        style="height: 20px; background: var(--EVI400, #f0f0f0); width: 1px"
      ></div>
      <span>Terminos y condiciones</span>
    </div>
    <span
      class="company-name-mobile text-center d-md-none d-flex mx-auto w-auto mt-4"
    >
    ©2023 nombredelaempresa - All Rights Reserved</span
    >
  </footer>
</template>
<style scoped>
footer {
  background: var(--EVI-DARK-005, #1c1c24);
  box-shadow: 0px -4px 40px 0px rgba(0, 0, 0, 0.1);
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
ul a {
  text-decoration: none;
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
}
h5 {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.footer-contacto div span {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: lighter;
  line-height: 25px; /* 178.571% */
}
@media (max-width: 768px) {
  ul a {
    color: var(--EVI500, #0193c1);
    text-align: center;
    font-family: Axiforma;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 178.571% */
  }
}
.divider {
  background: var(--EVI-DARK-004, #515166);
  height: 1px !important;
  margin: 1em auto;
}
.divider-vertical {
  background: var(--EVI400, #f0f0f0);
  width: 1px;
  height: 80px;
  margin: 0;
  padding: 0;
}
.terms-conditions,
.span {
  color: var(--EVI400, #f0f0f0);
  font-feature-settings: "liga" off;
  font-family: Axiforma;
  font-size: 13px;
  font-style: normal;
  font-weight: lighter;
  line-height: normal;
}
.terms-conditions {
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: end;
  width: auto;
}
.terms-conditions-mobile span {
  color: var(--EVI400, #f0f0f0);
  font-feature-settings: "liga" off;
  font-family: Axiforma;
  font-size: 13px;
  font-style: normal;
  font-weight: lighter;
  line-height: normal;
}
.company-name-mobile {
  color: var(--EVI-DARK-004, #515166);
  text-align: right;
  font-feature-settings: "liga" off;
  font-family: Axiforma;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>