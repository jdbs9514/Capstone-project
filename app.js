const hamburger = document.querySelector('.hamburger');
const xMarx = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    xMarx.classList.toggle('active');
});

const cross = document.querySelector('.cross');

cross.addEventListener('click', () => {
    xMarx.classList.remove('active');
});

const closeMenu = document.querySelector('.close-list');

closeMenu.addEventListener('click', () => {
    xMarx.classList.remove('active');
});