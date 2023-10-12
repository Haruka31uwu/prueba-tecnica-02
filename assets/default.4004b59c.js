import{_ as F}from"./nuxt-link.29bbb5df.js";import{a as M,g as P,s as u}from"./programs.composable.114e0697.js";import{b as E,g as p,a as R}from"./cart.composable.db6f6f68.js";import{s as z,q as f,_ as S,g as x,o as n,c as d,a as e,b as i,w,t as y,h as _,j as H,v as U,F as B,r as D,i as O,d as I,f as L,p as K,e as J,u as Q}from"./entry.c9885120.js";import{u as X}from"./vue.f36acd1f.0d57afd2.js";const A=z("mainStore",{state:()=>({theme:"dark"}),getters:{getTheme:s=>s.theme},actions:{changeTheme(s){const t=document.documentElement;t&&(s==="dark"?(t.style.setProperty("--EVI-DARK-001","#13131a"),t.style.setProperty("--EVI400","#f0f0f0"),t.style.setProperty("--EVI-DARK-005","#1c1c24")):(t.style.setProperty("--EVI-DARK-001","#f0f0f0"),t.style.setProperty("--EVI-DARK-005","#CFCECC"),t.style.setProperty("--EVI400","#13131a")),this.theme=s)}}}),Y=A(),Z=s=>{const t=document.getElementById(s);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},k=s=>{A().changeTheme(s)},W=f(()=>Y.theme),V=""+globalThis.__publicAssetsURL("assets/images/logo.svg");const q={setup(){let s=x(!1),t=x(!1);const c=W,a=f(()=>M()),r=f(()=>P()),v=p,m=R,o=E.value,b=f(()=>p.value>0);function h(g){Z(g)}function j(g){u(g),h("courses-section")}function N(){if(c.value==="dark"){k("light");return}k("dark")}return{programsOpen:s,programs:a,setProgramSelected:u,getProgramSel:r,setProgramSelectedHandler:j,changeThemeHandler:N,theme:c,getCartT:v,getCartItemsC:m,cartOpen:t,getCartI:o,getCartTo:p,getCartTonotZero:b}}},l=s=>(K("data-v-dc0afcc0"),s=s(),J(),s),G={class:"navbar navbar-expand-lg navbar-light custom-navbar"},$={class:"container-fluid"},ee=l(()=>e("img",{src:V},null,-1)),te={class:"d-flex gap-2 align-items-center",href:"#"},ae=["fill"],se=l(()=>e("g",null,[e("g",null,[e("g",null,[e("g",null,[e("g",null,[e("path",{d:`M12.2,15.267c0-3.322,0.896-6.43,2.448-9.113c0.376-0.649-0.191-1.451-0.918-1.265\r
						C5.35,7.041-0.711,14.961,0.067,24.179c0.736,8.701,7.768,15.803,16.463,16.617c6.033,0.565,11.517-1.811,15.221-5.848\r
						c0.5-0.546,0.073-1.432-0.666-1.401c-0.196,0.009-0.395,0.013-0.594,0.013C20.389,33.56,12.2,25.371,12.2,15.267z`})])]),e("g",null,[e("path",{d:`M23.144,5.6l0.917,2.633l2.788,0.061c0.354,0.008,0.498,0.456,0.218,0.669l-2.221,1.687l0.805,2.669\r
					c0.104,0.338-0.279,0.614-0.568,0.414l-2.292-1.59l-2.29,1.59c-0.29,0.201-0.669-0.076-0.569-0.414l0.805-2.669l-2.221-1.687\r
					c-0.28-0.213-0.134-0.661,0.218-0.669l2.788-0.061L22.44,5.6C22.556,5.267,23.027,5.267,23.144,5.6z`})]),e("g",null,[e("path",{d:`M40.26,26.44l0.881,2.53l2.679,0.057c0.389,0.009,0.549,0.502,0.24,0.737l-2.134,1.621l0.772,2.564\r
					c0.111,0.371-0.309,0.677-0.627,0.454l-2.201-1.527l-2.2,1.527c-0.318,0.223-0.739-0.083-0.626-0.454l0.772-2.564l-2.133-1.621\r
					c-0.31-0.234-0.149-0.729,0.238-0.737l2.679-0.057l0.884-2.53C39.612,26.074,40.131,26.074,40.26,26.44z`})]),e("g",null,[e("path",{d:`M39.926,8.098l1.325,3.799l4.021,0.086c0.452,0.01,0.639,0.584,0.278,0.858l-3.204,2.434l1.162,3.853\r
					c0.131,0.433-0.356,0.788-0.729,0.529l-3.306-2.294l-3.305,2.294c-0.372,0.259-0.86-0.097-0.729-0.529l1.161-3.853l-3.205-2.434\r
					c-0.358-0.273-0.172-0.849,0.279-0.858l4.022-0.086l1.324-3.799C39.173,7.672,39.776,7.672,39.926,8.098z`})])])])],-1)),oe=[se],ne=["fill"],de=l(()=>e("g",null,[e("g",null,[e("path",{d:`M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z\r
            M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z`}),e("path",{d:`M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717\r
            c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744\r
            c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742\r
            C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744\r
            c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z\r
            M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742\r
            S619.162,694.432,619.162,716.897z`})])],-1)),le=[de],ie={key:0,class:"cart-items"},ce={class:"cart-total"},re=L('<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-v-dc0afcc0><svg xmlns="http://www.w3.org/2000/svg" width="39" height="28" viewBox="0 0 39 28" fill="none" data-v-dc0afcc0><path d="M2 2H37" stroke="#F0F0F0" stroke-width="4" stroke-linecap="round" data-v-dc0afcc0></path><path d="M2 14H37" stroke="#F0F0F0" stroke-width="4" stroke-linecap="round" data-v-dc0afcc0></path><path d="M2 26H37" stroke="#F0F0F0" stroke-width="4" stroke-linecap="round" data-v-dc0afcc0></path></svg></button>',1),ve={class:"collapse navbar-collapse",id:"navbarSupportedContent"},me={class:"navbar-items w-md-100 mx-md-auto justify-content-center justify-content-lg-between"},fe=l(()=>e("a",{class:"navbar-brand d-none d-lg-flex",href:"#"},null,-1)),be={class:"d-flex flex-column flex-lg-row"},ge=l(()=>e("li",{class:"nav-item"},[e("a",{class:"nav-link nav-link-custom",href:"#"},"Inicio")],-1)),pe=l(()=>e("a",{class:"nav-link nav-link-custom",href:"#"},[I("Cursos "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"8",viewBox:"0 0 14 8",fill:"none"},[e("path",{d:"M0.999999 1L7 7L13 1",stroke:"#515166","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),_e={key:0,class:"programs-list"},he=["onClick"],ue={key:0},xe=l(()=>e("li",{class:"nav-item"},[e("a",{class:"nav-link nav-link-custom",href:"#"},"Sobre Nosotros")],-1));function we(s,t,c,a,r,v){const m=F;return n(),d("nav",G,[e("div",$,[i(m,{to:"/"},{default:w(()=>[ee]),_:1}),e("a",te,[(n(),d("svg",{fill:a.theme==="dark"?"#515166":"#000000",version:"1.1",id:"theme-icon",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30px",height:"30px",viewBox:"0 0 45.74 45.74","xml:space":"preserve",onClick:t[0]||(t[0]=o=>a.changeThemeHandler())},oe,8,ae))]),i(m,{to:"/car",style:{position:"relative",display:"flex","align-items":"center","column-gap":"0.5em"}},{default:w(()=>[(n(),d("svg",{fill:a.theme==="dark"?"#515166":"#000000",class:"car",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30px",height:"30px",viewBox:"0 0 902.86 902.86","xml:space":"preserve"},le,8,ne))]),_:1}),a.getCartTonotZero?(n(),d("div",ie,[e("span",ce,"S/. "+y(a.getCartTo),1)])):_("",!0),re,e("div",ve,[e("div",me,[fe,e("ul",be,[e("li",{class:"nav-item",onClick:t[1]||(t[1]=(...o)=>a.changeThemeHandler&&a.changeThemeHandler(...o))}),ge,e("li",{class:"nav-item",onClick:t[2]||(t[2]=o=>a.programsOpen=!a.programsOpen)},[pe,a.getProgramSel!=null?H((n(),d("ul",_e,[(n(!0),d(B,null,D(a.programs,(o,b)=>(n(),d("li",{style:O(a.getProgramSel.id==o.id?"color:var(--EVI500, #0193c1);":"color:var(--EVI400, #ffffff);"),key:`program-${b}`,onClick:h=>a.setProgramSelectedHandler(o)},[o.id!=1?(n(),d("hr",ue)):_("",!0),I(" "+y(o.nombre),1)],12,he))),128))],512)),[[U,a.programsOpen]]):_("",!0)]),xe])])])])])}const ye=S(q,[["render",we],["__scopeId","data-v-dc0afcc0"]]),C=""+globalThis.__publicAssetsURL("assets/images/mail.svg"),T=""+globalThis.__publicAssetsURL("assets/images/phone.svg"),ke=""+globalThis.__publicAssetsURL("assets/images/facebook.svg"),Ce=""+globalThis.__publicAssetsURL("assets/images/instagram.svg"),Te=""+globalThis.__publicAssetsURL("assets/images/youtube.svg"),Se=""+globalThis.__publicAssetsURL("assets/images/linkedin.svg"),Ie=""+globalThis.__publicAssetsURL("assets/images/tiktok.svg"),Le=""+globalThis.__publicAssetsURL("assets/images/whatsapp.svg");const Ae={},Ve={class:"row d-flex align-items-start py-5",style:{width:"100vw"}},je=L('<div class="d-flex justify-content-center justify-content-md-center justify-content-xl-evenly col-sm-12 col-md-5 col-lg-6 align-items-center" data-v-dbfbe81e><img src="'+V+'" width="200px" height="80%" class="me-md-2 me-lg-5 me-sm-5 me-1" data-v-dbfbe81e><div class="footer-section-main footer-section flex-md-column d-none d-md-flex" data-v-dbfbe81e><h5 class="d-sm-none d-md-flex" data-v-dbfbe81e>Navega</h5><div class="flex-row d-flex" data-v-dbfbe81e><ul data-v-dbfbe81e><li data-v-dbfbe81e><a href="#" data-v-dbfbe81e>Preguntas Frecuentes</a></li><li data-v-dbfbe81e><a href="#" data-v-dbfbe81e>Acerca de Nosotros</a></li><li data-v-dbfbe81e><a href="#" data-v-dbfbe81e>Trabaja con Nosotros</a></li></ul><div class="divider-vertical d-none d-xl-flex col-md-1 ms-1 ms-md-3 ms-xl-5" data-v-dbfbe81e></div></div></div><div class="footer-contacto d-sm-flex d-md-none flex-column" data-v-dbfbe81e><h5 class="" data-v-dbfbe81e>Contacto</h5><div class="d-flex flex-column gap-2" data-v-dbfbe81e><div class="gap-2 d-flex align-items-center" data-v-dbfbe81e><img src="'+C+'" data-v-dbfbe81e><span data-v-dbfbe81e>ejemploabc@gmail.com</span></div><div class="gap-1 d-flex align-items-center" data-v-dbfbe81e><img src="'+T+'" data-v-dbfbe81e><span data-v-dbfbe81e>+51 78945646</span></div></div></div></div><div class="w-75 divider d-flex d-md-none" data-v-dbfbe81e></div><div class="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between col-sm-12 col-md-7 col-lg-5 gap-lg- gap-md-1 gap-sm-4" data-v-dbfbe81e><div class="footer-contacto d-none d-md-flex flex-md-column" data-v-dbfbe81e><h5 class="d-none d-md-flex" data-v-dbfbe81e>Contacto:</h5><div class="d-flex flex-row" data-v-dbfbe81e><div class="d-flex flex-column gap-2" data-v-dbfbe81e><div class="gap-2 d-flex align-items-center" data-v-dbfbe81e><img src="'+C+'" data-v-dbfbe81e><span data-v-dbfbe81e>ejemploabc@gmail.com</span></div><div class="gap-1 d-flex align-items-center" data-v-dbfbe81e><img src="'+T+'" data-v-dbfbe81e><span data-v-dbfbe81e>+51 78945646</span></div></div><div class="divider-vertical d-none d-xl-flex col-md-1 ms-1 ms-md-2 ms-xl-5" data-v-dbfbe81e></div></div></div><div class="footer-section-main footer-section d-sm-flex d-md-none w-100 justify-content-center" data-v-dbfbe81e><h5 class="d-none" data-v-dbfbe81e>Navega</h5><ul class="w-50 mx-auto text-center w-100" data-v-dbfbe81e><li data-v-dbfbe81e><a href="#" data-v-dbfbe81e>Preguntas Frecuentes</a><div class="w-50 divider d-flex d-md-none" data-v-dbfbe81e></div></li><li data-v-dbfbe81e><a href="#" data-v-dbfbe81e>Acerca de Nosotros</a><div class="w-50 divider d-flex d-md-none" data-v-dbfbe81e></div></li><li data-v-dbfbe81e><a href="#" data-v-dbfbe81e>Trabaja con Nosotros</a></li></ul></div><div class="w-75 divider d-flex d-md-none" data-v-dbfbe81e></div><div class="d-flex flex-column text-center" data-v-dbfbe81e><h5 data-v-dbfbe81e>Siguenos en nuestras redes</h5><ul class="d-flex flex-row gap-4 justify-content-center align-items-center mt-3" data-v-dbfbe81e><li data-v-dbfbe81e><img src="'+ke+'" data-v-dbfbe81e></li><li data-v-dbfbe81e><img src="'+Ce+'" data-v-dbfbe81e></li><li data-v-dbfbe81e><img src="'+Te+'" data-v-dbfbe81e></li><li data-v-dbfbe81e><img src="'+Se+'" data-v-dbfbe81e></li><li data-v-dbfbe81e><img src="'+Ie+'" data-v-dbfbe81e></li><li data-v-dbfbe81e><img src="'+Le+'" data-v-dbfbe81e></li></ul></div></div><div class="terms-conditions d-flex flex-row align-items-center gap-2 d-md-flex d-none" data-v-dbfbe81e><span data-v-dbfbe81e>Terminos y condiciones</span><div style="height:25px;background:var(--EVI400, #f0f0f0);width:1px;" data-v-dbfbe81e></div><span data-v-dbfbe81e> ©2023 nombredelaempresa - All Rights Reserved</span></div><div class="terms-conditions-mobile mt-4 d-flex flex-row align-items-center gap-2 d-md-none d-flex justify-content-center gap-2" data-v-dbfbe81e><span data-v-dbfbe81e>Libro de reclamaciones</span><div style="height:20px;background:var(--EVI400, #f0f0f0);width:1px;" data-v-dbfbe81e></div><span data-v-dbfbe81e>Terminos y condiciones</span></div><span class="company-name-mobile text-center d-md-none d-flex mx-auto w-auto mt-4" data-v-dbfbe81e> ©2023 nombredelaempresa - All Rights Reserved</span>',6),Ne=[je];function Fe(s,t){return n(),d("footer",Ve,Ne)}const Me=S(Ae,[["render",Fe],["__scopeId","data-v-dbfbe81e"]]);const Ue={__name:"default",setup(s){return X({link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"}],script:[{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",crossorigin:"anonymous"}]}),(t,c)=>{const a=ye,r=Q("router-view"),v=Me;return n(),d("div",null,[i(a),i(r),i(v)])}}};export{Ue as default};
