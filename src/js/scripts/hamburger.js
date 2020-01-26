function hamburger() {
    const hamburgerButton = document.querySelector('.hamburger');
    const menuList = document.querySelector('.navbar__list');

    hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('is-active');
        menuList.classList.toggle('navbar__mobile');
    })
}

export default hamburger;
