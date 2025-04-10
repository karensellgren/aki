function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelector('.language-toggle').addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.language-menu').classList.toggle('show');
});

document.addEventListener('click', function () {
    document.querySelector('.language-menu').classList.remove('show');
});

