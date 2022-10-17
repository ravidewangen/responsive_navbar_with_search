
const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');
const searchBx = document.querySelector('.search-bx');

const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');

searchBtn.onclick = () => {
    searchBx.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active')
}

closeBtn.onclick = () => {
    searchBx.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active')
}

menuToggle.onclick = () => {
    header.classList.toggle('toggle');
}


