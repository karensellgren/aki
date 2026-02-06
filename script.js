function toggleMenu() {
    // Select the main NAV element, not just the links
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Fix for Language Toggle (Desktop & Mobile)
const langBtn = document.querySelector('.lang-btn');
const langMenu = document.querySelector('.language-menu');

if (langBtn) {
    langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        langMenu.classList.toggle('show');
    });
}

// Close menu when clicking outside
document.addEventListener('click', function () {
    if (langMenu) {
        langMenu.classList.remove('show');
    }
});