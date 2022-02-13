let burgerButton = document.querySelector('.nav-toggle');
let navBar = document.querySelector('.nav');

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('active');
    navBar.classList.toggle('mobile-nav');
})
