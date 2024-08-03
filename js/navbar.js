document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section--page');
    const navLinks = document.querySelectorAll('#navbar a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const themeSwitcher = document.getElementById('theme-switcher');
    const lightTheme = document.getElementById('theme-light');
    const darkTheme = document.getElementById('theme-dark');

    lightTheme.addEventListener('click', () => {
        document.body.classList.remove('dark-mode');
    });

    darkTheme.addEventListener('click', () => {
        document.body.classList.add('dark-mode');
    });
});
