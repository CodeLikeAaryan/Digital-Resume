document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-switcher');
    const lightTheme = document.getElementById('theme-light');
    const darkTheme = document.getElementById('theme-dark');

    lightTheme.addEventListener('click', () => {
        document.body.removeAttribute('data-theme');
    });

    darkTheme.addEventListener('click', () => {
        document.body.setAttribute('data-theme', 'dark');
    });
});
// Smooth scroll polyfill for Safari and Edge
if ('scrollBehavior' in document.documentElement.style === false) {
    import('https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js').then((module) => {
        module.polyfill();
    });
}

// Helper function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


