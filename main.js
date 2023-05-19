const navEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toogleDesktopMenu)


function toogleDesktopMenu (){
    desktopmenu.classList.toggle('inactive');
}