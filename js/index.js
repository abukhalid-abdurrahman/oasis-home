'use strict';

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){

    // Burger Menu
    // find the elements we need
    const burgerMenu = document.querySelector('.burger'),
    burgerBg = document.querySelector('.burger__bg'),
    burgerImg = document.querySelector('.burger__img'),
    burgerClosePopup = document.querySelector('.burger__close'),
    burgerLink = document.querySelectorAll('.burger__list__link');

    // click on the icon to open the menu
    burgerImg.addEventListener('click', function(e) {
        burgerMenu.classList.add('burger--active');
        burgerBg.style.display = 'block';

    // click outside the element to make the menu disappear
        document.addEventListener( 'click', (e) => {
            const clickOutOfMenu = e.composedPath().includes(burgerMenu),
                clickOutOfBurger = e.composedPath().includes(burgerImg)

        
            if (! clickOutOfMenu  && ! clickOutOfBurger) {
                burgerMenu.classList.remove('burger--active');
                burgerBg.style.display = 'none';
            }
        })
    });

    // click to make the menu disappear
    burgerClosePopup.addEventListener('click', function(e) {
        burgerMenu.classList.remove('burger--active');
        burgerBg.style.display = 'none';
    });

    // click on each link to make the menu also disappear
    for (let i = 0; i < burgerLink.length; i++) {
            burgerLink[i].addEventListener('click', function(e) {
            burgerMenu.classList.remove('burger--active');
            burgerBg.style.display = 'none';
        });
    }

    const oasisReservedRightsEl = document.getElementById("oasis-year");
    const date = new Date();
    const currentYear = date.getFullYear();

    const rightsReservedStr = `© <a href="#" class="footer__left__link">OASIS</a> ${currentYear}. All rights reserved.`;
    oasisReservedRightsEl.innerHTML = rightsReservedStr;
}