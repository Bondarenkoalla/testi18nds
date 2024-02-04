document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('.scrollLink');
    const body = document.querySelector('body')
    const burger = document.querySelector('.header__menu')
    const header = document.querySelector('.navigationPanel')

    navLinks?.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let targetId = link.getAttribute('href'); 
            if (window.location.pathname !== '/') {
                window.location.href = '/';
            }
            body.style.overflowY = 'visible';
            header.classList.remove('visible');
            burger.classList.remove('active');
            scrollToSelector(targetId);
        });
    });

    function scrollToSelector(selector) {
        selector = selector.replace('/', '');
        const targetSection = document.querySelector(selector);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
