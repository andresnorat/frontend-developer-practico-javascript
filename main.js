const navEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const productDetailClosed = document.querySelector('.product-detail-close')
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetailContainer');


navEmail.addEventListener('click', toogleDesktopMenu);
burguerIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
productDetailClosed.addEventListener('click', closeProductDetail)

function toogleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetail();
    desktopmenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetail();

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMobileClosed = desktopmenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMobileClosed) {
        desktopmenu.classList.add('inactive');
    }

    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileDesktopMeno = desktopmenu.classList.contains('inactive')
    if (!isShoppingCartClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    if (!isMobileDesktopMeno) {
        desktopmenu.classList.add('inactive');
    }
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
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


function renderProductList(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.image);
        imageProduct.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const prodductItem = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = product.price;

        const name = document.createElement('p');
        name.innerText = product.name;


        const figure = document.createElement('figure');
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

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


