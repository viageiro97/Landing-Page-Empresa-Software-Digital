import { activarBtn, mudarSlides } from "./functions.js";
/**
 * Menu Principal (Hamburguer);
 */

const menuIcon = document.getElementById('menu-icon');
const navigation = document.getElementById('main-nav');
const overlay = document.getElementById('overlay');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
    navigation.classList.toggle('hide');
    navigation.classList.toggle('animate-menu');
    overlay.classList.toggle('show');
})

//Ao clicar no overlay, deve esconder o Menu!
overlay.addEventListener('click', () => {
    menuIcon.click();
})

/**
 * Slider (Testemunhos);
 */
const testemunhos = document.querySelectorAll('.testimony');
const testemunhosBtns = document.querySelectorAll('.caroussel__btn');
let activeSlide = 1;
//Adicionar Eventos nos Botoes!!!
testemunhosBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        activeSlide = btn.getAttribute('data-order');
        activarBtn(testemunhosBtns,activeSlide);
        //Iterrar sobre os testemunhos!
        mudarSlides(testemunhos, activeSlide);
    })
})



