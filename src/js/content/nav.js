const nav = function() {
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 50);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
