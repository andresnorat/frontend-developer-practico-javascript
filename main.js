const navEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


navEmail.addEventListener('click', toogleDesktopMenu)
burguerIcon.addEventListener('click', toogleMobileMenu)

function toogleDesktopMenu (){
    desktopmenu.classList.toggle('inactive');
}

function toogleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}   