// IDENTIFICAR O CLICK NO MENU
// VERIFICAR O ITEM QUE FOI CLICADO E FAZER REFERENCIA COM O ALVO
// VERIFICAR A DISTANCIA ENTRE O ALVO E O TOPO
// ANIMAR O SCROLL ATE O ALVO

// EFEITO ROLA SECTION'S

// const menuItens = document.querySelectorAll('nav a[href^="#"]');
// // const menuItens2 = document.querySelectorAll('nav a i');

// // menuItens2.addEventListener('click', scrollToIdOnClick);

// menuItens.forEach(item => {
//     item.addEventListener('click', scrollToIdOnClick);
// })

// function scrollToIdOnClick(event) {
//     event.preventDefault();
//     const to = getScrollTopByHref(event.target) - 60;
    
//     scrollToPosition(to);
// }

// function getScrollTopByHref(element) {
//     const id = element.getAttribute('href');
//     // console.log('teste', element);
//     return document.querySelector(id).offsetTop;
// }

// function scrollToPosition(to) {
//     window.scroll({
//         top: to,
//         behavior: "smooth",
//      });
// }

///////////////////////////////////////////////

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}