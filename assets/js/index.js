const menuIcon = document.querySelector('.header__menu-icon')
const menuMobile = document.querySelector('.mobile__menu')
const contentImg = document.querySelector('.body__content-img')
const menuItemsPc = document.querySelectorAll('.header__menu-item')  
const menuItemsMobile = document.querySelectorAll('.mobile__menu-item')  

function start() {
        activateMenuItemPc()
        handleToggleMenuMobile() 
        activateMenuItemMobile()
}
start();


function activateMenuItemPc() {
        menuItemsPc.forEach( (item) => 
                item.addEventListener('click', function(event) {
                        menuItemsPc.forEach( (el) => el.classList.remove('header__menu-item--active'))
                        event.target.classList.add('header__menu-item--active')
                })
        )
}

function handleToggleMenuMobile()  {
        menuIcon.onclick = function() {
                menuMobile.classList.toggle('visible-mobile')
                if (menuMobile.classList.contains('visible-mobile')) {
                        contentImg.style.marginTop = '5px'
                        menuIcon.style.transform = 'scale(1.1)'
                } else {
                        contentImg.style.marginTop = '52px'
                        menuIcon.style.transform = 'scale(1)'
                }
                
        }
}

function activateMenuItemMobile() {
        menuItemsMobile.forEach( (item) => 
                item.addEventListener('click', function(event) {
                        menuItemsMobile.forEach( (el) => el.classList.remove('mobile__menu-item--has-active'))
                        event.target.classList.add('mobile__menu-item--has-active')
                })
        )
}






