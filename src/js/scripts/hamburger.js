function hamburger() {
    const bp_tablet = getComputedStyle(document.documentElement).getPropertyValue('--bp-tablet');
    const mobile = window.matchMedia(`(max-width: ${bp_tablet})`)
    const hamburgerButton = document.querySelector('.hamburger');
    const menuList = document.querySelector('.navbar__list');
    const menuLinks = document.querySelectorAll('.navbar__link');

    if (mobile.matches) {
        hamburgerButton.addEventListener('click', () => {
            hamburgerButton.classList.toggle('is-active');
            menuList.classList.toggle('navbar__mobile');
        });
        menuLinks.forEach( function(element) {
            element.addEventListener('click', () => {
                hamburgerButton.classList.remove('is-active');
                menuList.classList.remove('navbar__mobile');
            });
        })
    };
};

export default hamburger;
