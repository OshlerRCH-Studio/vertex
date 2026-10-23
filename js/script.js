// =========================================================
// VERTEX — JAVASCRIPT
// =========================================================
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
    const setMenu = (open) => {
        nav.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
        toggle.textContent = open ? '✕' : '☰';
    };

    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));
}