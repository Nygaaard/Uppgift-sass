!function(){let e,l=document.getElementById("hamburger"),t=document.getElementById("close"),s=document.getElementById("nav-mobile");l.addEventListener("click",function(){s.style.display="block"}),t.addEventListener("click",function(){s.style.display="none"});let d=document.getElementById("buttonMoon"),n=document.getElementById("buttonSun"),o=document.getElementById("hiddenOne"),i=document.getElementById("hiddenTwo"),y=document.documentElement,a=!1;function c(){let l=document.documentElement;a=!a,e?a?(l.classList.remove("light-mode"),l.classList.add("dark-mode")):(l.classList.add("light-mode"),l.classList.remove("dark-mode")):a?(l.classList.add("dark-mode"),l.classList.remove("light-mode")):(l.classList.remove("dark-mode"),l.classList.add("light-mode"))}i.style.display="none",n.style.display="none",window.onload=function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?(e=!0,a=!0,i.style.display="block",o.style.display="none",n.style.display="block",d.style.display="none",y.classList.remove("light-mode")):(e=!1,a=!1,o.style.display="block",i.style.display="none",n.style.display="none",d.style.display="block",y.classList.add("light-mode"))},d.addEventListener("click",function(){o.style.display="block",i.style.display="none",n.style.display="none",d.style.display="block",i.style.display="block",o.style.display="none",n.style.display="block",d.style.display="none",c()}),n.addEventListener("click",function(){o.style.display="none",i.style.display="block",n.style.display="block",d.style.display="none",i.style.display="none",o.style.display="block",n.style.display="none",d.style.display="block",c()})}();
//# sourceMappingURL=index.23b77685.js.map
