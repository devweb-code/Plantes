

const open=document.querySelector("#open");
const close=document.querySelector("#close");
const menu=document.querySelector("#menu");

// -----------------------Script pour la NavBar-------------------------------------->
open.onclick=function (){
menu.classList.toggle('navbar');
menu.style.left='0';
open.style.display="none";
close.style.display="flex";
}
close.onclick=function(){
  menu.classList.remove("navbar");
  menu.style.left='-1000px';
  menu.style.transition='all 2s ease-in-out';  
  close.style.display="none";
  open.style.display="flex";
}

// ---------------------------------------------------Script pour le Swipper----------------------------------------------------------------->

const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor:true,
  spaceBetween:30,

  // If we need pagination
  pagination: {

    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,

  },

  // Navigation arrows
  navigation: {

    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

  
  breakpoints:{

    0:{
        slidesPerView:1
    },
    620:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }
  
});

// -------------------------------------------------------Script pour l'intersecteurObserver-------------------------------------------------------------->

var observer = new IntersectionObserver(callback, options);
console.log(observer);