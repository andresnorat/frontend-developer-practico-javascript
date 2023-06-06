const navEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');


navEmail.addEventListener('click', toogleDesktopMenu);
burguerIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu() {
    const isAsideClosed = asideProductDetail.classList.contains('inactive');
    if (!isAsideClosed) {
        asideProductDetail.classList.add('inactive')
    }
    desktopmenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isAsideClosed = asideProductDetail.classList.contains('inactive');
    if (!isAsideClosed) {
        asideProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMobileClosed = desktopmenu.classList.contains('inactive');
    // const isAsideClosed = mobileMenu.classList.contains('inactive');

    if (!ismobileMenuClosed || !isDesktopMobileClosed ) {
        mobileMenu.classList.add('inactive');
        desktopmenu.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    proce: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
