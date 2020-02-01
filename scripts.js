const hamburgerIcon = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.menu-hide')

hamburgerIcon.addEventListener('click', () => {
    menu.classList = "menu"
    // hide hamburgerIcon
    // show menu
    // change opacity of site
})

const xMark = document.querySelector('.x-mark')

xMark.addEventListener('click', () => {
    menu.classList = "menu-hide"
})