<template>
  <div>
    <navbar/>
    <router-view/>
    <footer-customized style="position: relative;"/>
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      integrity:
        "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous",
    },
  ],
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Rubik:wght@600&display=swap');
:root {
  --EVI-DARK-001: #13131a;
  --EVI-DARK-004: #515166;
  --EVI-DARK-005: #1c1c24;
  --EVI400: #f0f0f0;
  --EVI500:#0193C1;
}
@font-face {
  font-family: "Axiforma";
  src: local("Axiforma Bold"), local("Axiforma-Bold"),
    url("/assets/fonts/Axiforma-Bold.woff2") format("woff2"),
    url("/assets/fonts/Axiforma-Bold.woff") format("woff"),
    url("/assets/fonts/Axiforma-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Axiforma";
  src: local("Axiforma Semi Bold"), local("Axiforma-Semi-Bold"),
    url("/assets/fonts/Axiforma-SemiBold.woff2") format("woff2"),
    url("/assets/fonts/Axiforma-SemiBold.woff") format("woff"),
    url("/assets/fonts/Axiforma-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Axiforma";
  src: local("Axiforma Book"), local("Axiforma-Book"),
    url("/assets/fonts/Axiforma-Book.woff2") format("woff2"),
    url("/assets/fonts/Axiforma-Book.woff") format("woff"),
    url("/assets/fonts/Axiforma-Book.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Axiforma";
  src: local("Axiforma Light"), local("Axiforma-Light"),
    url("/assets/fonts/Axiforma-Light.woff2") format("woff2"),
    url("/assets/fonts/Axiforma-Light.woff") format("woff"),
    url("/assets/fonts/Axiforma-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}
</style>