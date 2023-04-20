// import './styles/index.css';
// import scroll from './modules/scroll';
// import { toggleTheme, addThemeClass } from './modules/toggleTheme';
// import displayList from './modules/displayList';

const btnHamburger = document.querySelector('.fa-bars');

const nav = document.getElementById('nav');

btnHamburger.addEventListener('click', () => {
    if (nav.classList.contains('navOpen')) {

        nav.classList.remove('navOpen');
    } else {
        nav.classList.add('navOpen');
    }
});

const btnTheme = document.getElementById('toggleTheme');

btnTheme.addEventListener('click', () => {
    if (document.body.classList.contains('body-light')) {

        document.body.classList.add("body-dark");
        document.body.classList.remove("body-light");
    } else {
        document.body.classList.add("body-light");
        document.body.classList.remove("body-dark");
    }
});