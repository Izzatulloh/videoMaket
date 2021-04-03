let menu = document.querySelector(".header__menu-item");
let nav  = document.querySelector(".header__nav");
let body = document.querySelector('body')

menu.addEventListener('click', () => {
    menu.classList.toggle("active")
    nav.classList.toggle("active")
    console.log(menu);
    if (menu.classList.length == 2) {
        body.style.overflow = 'hidden'
        
    } else{
        body.style.overflow = 'auto'
    }
})

