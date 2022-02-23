let button = document.querySelector('.menu-button');
let menu = document.querySelector('.page-navigation')
let body = document.querySelector('body')

function toggle() {

    if (menu.className === 'page-navigation') {
        menu.className = 'page-navigation open';
        button.className = 'menu-button open-button'
    } else if (menu.className === 'page-navigation open') {
        menu.className = 'page-navigation';
        button.className = 'menu-button'
    }
}


button.addEventListener('click', toggle)