export function setHeaderScroll() {
    window.addEventListener('scroll', changeHeaderClass);

    function changeHeaderClass() {
        const headerClasses = document.getElementById('header').classList;

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


