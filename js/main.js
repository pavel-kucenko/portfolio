const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#nav__mobile-nav');
const menuOverlay = document.querySelector('#body-overlay');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('nav__menu-active');
    mobileNavContainer.classList.toggle('nav__mobile-nav--active');
    menuOverlay.classList.toggle('body--overlay');
}

menuOverlay.onclick = function () {
    menuToggle.classList.toggle('nav__menu-active');
    mobileNavContainer.classList.toggle('nav__mobile-nav--active');
    menuOverlay.classList.toggle('body--overlay');
}
