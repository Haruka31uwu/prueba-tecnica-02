<template>
  <div class="footer-container">
    <footer class="footer-desktop">
      <div class="footer-desktop-1">
        <img src="/assets/images/logo.svg" height="100" width="200" />
        <div class="navega">
          <span>Navega</span>
          <ul class="navega-list">
            <li>Preguntas Frecuentes</li>
            <li>Acerca de Nosotros</li>
            <li>Trabaja con Nosotros</li>
          </ul>
        </div>
        <div class="divider"></div>
      </div>
      <div class="footer-desktop-2">
        <div class="contacto">
          <span>Contacto</span>
          <ul class="contacto-list">
            <li>
              <img src="/assets/images/mail.svg" />
              <p>ejemploabc@gmail.com</p>
            </li>
            <li>
              <img src="/assets/images/phone.svg" />
              <p>+51 999 999 999</p>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
      </div>
      <div class="footer-desktop-3">
        <span>Siguenos en nuestras redes</span>
        <ul>
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
    </footer>
    <footer v-if="false"></footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-container {
  width: 100%;
  background: var(--EVI-DARK-005, #1c1c24);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5em 0;
}
.footer-desktop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.footer-desktop-1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  column-gap: 5em;
}
.footer-desktop-2 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  column-gap: 5em;
}
.footer-desktop-2 .contacto ul li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1em;
}
.footer-desktop-3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.footer-desktop-3 ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 1em;
}
.navega {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}.navega span{
    margin-bottom: 1em;
}
.navega-list{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    row-gap: 1em;
}.navega-list li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
span {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
ul{
  list-style: none;

}
.contacto-list{
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}.contacto-list li{
    display: flex;
    justify-content: center;
    align-items: center;
}
li {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
}
.divider {
  width: 1px;
  height: 98px;
  background: var(--EVI400, #f0f0f0);
}
p {
  color: var(--EVI400, #f0f0f0);
  font-family: Axiforma;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  margin: 0;
  padding: 0;
}
</style>