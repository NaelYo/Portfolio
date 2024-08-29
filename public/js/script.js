// Navbar Fixed 
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#toTop');

    if( window.scrollY > fixedNav ) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    } else {
        toTop.classList.add('hidden');
        header.classList.remove('navbar-fixed');
    }
}

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('hidden')
})

window.addEventListener('click', function(e) {
    if( e.target != hamburger && e.target != navMenu ) {
        hamburger.classList.remove('navbar-fixed')   
        navMenu.classList.add('hidden')
    }
})

// Theme
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const html = document.querySelector('html')

sun.addEventListener('click', function() {
    sun.classList.add('hidden');
    moon.classList.remove('hidden')
    html.classList.add('dark')
})

moon.addEventListener('click', function() {
    moon.classList.add('hidden')
    sun.classList.remove('hidden')
    html.classList.remove('dark')
})

const sunSM = document.querySelector('#sunSM');
const moonSM = document.querySelector('#moonSM');

sunSM.addEventListener('click', function() {
    sunSM.classList.add('hidden');
    moonSM.classList.remove('hidden')
    html.classList.add('dark')
})

moonSM.addEventListener('click', function() {
    moonSM.classList.add('hidden')
    sunSM.classList.remove('hidden')
    html.classList.remove('dark')
})

// Reveal Text
const text = baffle('#data');
text.set({
    characters: '<░████<▒█▓>░/<▓▓ ▓▓▓▓/▒█▒░▒<█▒▓▓░▓/█▒',
    speed: 120
});
text.start();
text.reveal(2000);