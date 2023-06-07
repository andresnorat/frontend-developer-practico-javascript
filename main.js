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
productList.push(
    {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);


// <!-- <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> -->

function renderProductList(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const prodductItem = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = product.price;

        const name = document.createElement('p');
        name.innerText = product.name;


        const figure = document.createElement('figure');
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src',"./icons/bt_add_to_cart.svg");

        //
        figure.appendChild(iconCart);
        prodductItem.append(price, name);
        productInfo.append(prodductItem, figure)
        productCard.append(imageProduct, productInfo);


        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.append(productCard);

    }   

    

}

renderProductList(productList);


