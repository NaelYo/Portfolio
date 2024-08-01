// Navbar Fixed 

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('hidden')
})