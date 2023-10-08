<template>
    <nav class="navbar navbar-expand-lg custom-navbar sticky-top px-4">
      <div class="navbar-items">
        <a class="navbar-brand" href="#"
          ><img src="/assets/images/logo.svg"
        /></a>
        <ul>
          <li class="nav-item">
            <a class="nav-link nav-link-custom" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-custom" href="#">Cursos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-custom" href="#">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  <script>
  export default {
    components: {},
  };
  </script>
  <style scoped>
  .custom-navbar {
    border-radius: 0px 0px 30px 30px;
    background-color: var(--EVI-DARK-001, #13131a);
    box-shadow: 0px 4px 80px 0px rgba(191, 191, 191, 0.1);
}
  .navbar-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  ul {
    display: flex;
    flex-direction: row;
    padding-right: 2em;
    list-style: none;
    margin: 0;
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
  </style>