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

// --- CONTACT FORM HANDLER ---
const contactForm = document.getElementById('contactForm');
// PASTE YOUR GOOGLE SCRIPT URL BELOW
const scriptURL = 'https://script.google.com/macros/s/AKfycbwCAhDnaMUrEj_7DePAPAkylLVvlW9gushsuByu-lK_e-dNJtWgwSh21nQOtD4KrDWawQ/exec';

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerText;

        // Change button text to show loading
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        fetch(scriptURL, { method: 'POST', body: new FormData(contactForm) })
            .then(response => {
                alert("Thank you! We have received your message.");
                contactForm.reset(); // Clear the form
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            })
            .catch(error => {
                alert("Oops! Something went wrong. Please try again.");
                console.error('Error!', error.message);
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            });
    });
}