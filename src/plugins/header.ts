export function setHeaderScroll() {
    window.addEventListener('scroll', changeHeaderClass);
    function changeHeaderClass() {
        const headerClasses = document.getElementById('header').classList;
        document.getElementById('nav-menu').addEventListener('click', toggleBurgerMenu)
        if (window.scrollY > 200) {
            if (headerClasses && !headerClasses.contains('scrolled')) {
                headerClasses.add('scrolled');
                document.getElementById('header-button').classList.remove('white');
                document.getElementById('mobile-button').classList.remove('white')
            }
        } else {
            if (headerClasses && headerClasses.contains('scrolled')) {
                headerClasses.remove('scrolled')
                document.getElementById('header-button').classList.add('white');
                document.getElementById('mobile-button').classList.add('white')
            }
        }
    }
}

export function toggleBurgerMenu() {
    let burgerButton = document.getElementById('burger-button')
    let navClasses  = document.getElementById('nav-menu').classList;
    if (navClasses.contains('opened')) {
        document.getElementById('nav-menu').classList.remove('opened')
        burgerButton.classList.remove('active')
    } else {
        document.getElementById('nav-menu').classList.add('opened')
        burgerButton.classList.add('active')

    }
}

