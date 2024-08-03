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
