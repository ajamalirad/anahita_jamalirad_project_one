// when you click on the hamburger menu 
// the hamburger menu becomes the accent colour
// the menu items become visible 

// when you click on the hamburger menu again --> toggle?
// it becomes black and the menu stops being visible

const menuElement = document.querySelector('.menuLogo');
const menu = document.querySelector('header nav ul');

menuElement.addEventListener('click',function showMenu() {
    menu.classList.toggle("visibleNav")
    menuElement.classList.toggle("menuLogoClicked")
})


