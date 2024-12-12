// JS to underline what page user is on
const currentPage = window.location.pathname.split('/').pop();

const headerLinks = document.querySelectorAll('header a');

headerLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
