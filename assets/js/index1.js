const menuIcon = document.querySelector('.header__menu-icon')
const menuMobile = document.querySelector('.mobile__menu')
const contentImg = document.querySelector('.body__content-img')
 menuIcon.onclick = function() {
        menuMobile.classList.toggle('visible-mobile')
        if (menuMobile.classList.contains('visible-mobile')) {
                contentImg.style.marginTop = '5px'
        } else {
                contentImg.style.marginTop = '52px'
        }
 }