let e=document.getElementById("hamburger"),l=document.getElementById("close"),t=document.getElementById("nav-mobile");e.addEventListener("click",function(){t.style.display="block"}),l.addEventListener("click",function(){t.style.display="none"});let n=document.getElementById("buttonMoon"),d=document.getElementById("buttonSun"),s=document.getElementById("hiddenOne"),y=document.getElementById("hiddenTwo"),o=!0,i=!1;function c(){let e=document.documentElement;i?e.classList.remove("dark-mode"):e.classList.add("dark-mode"),i=!i}y.style.display="none",d.style.display="none",n.addEventListener("click",function(){o=!o,s.style.display="block",y.style.display="none",d.style.display="none",n.style.display="block",y.style.display="block",s.style.display="none",d.style.display="block",n.style.display="none",c()}),d.addEventListener("click",function(){o=!o,s.style.display="none",y.style.display="block",d.style.display="block",n.style.display="none",y.style.display="none",s.style.display="block",d.style.display="none",n.style.display="block",c()});
//# sourceMappingURL=index.575c6d36.js.map