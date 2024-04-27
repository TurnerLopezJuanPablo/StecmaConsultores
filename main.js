document.getElementById("currentYear").textContent = new Date().getFullYear();

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let responsiveNavOpen = false;
const icon = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-menu');

function responsiveNav() {
    if (responsiveNavOpen) {
        icon.innerHTML = '&#9776;';
        icon.classList.remove('icon-closed');
        icon.classList.add('.icon');

        navMenu.classList.add('d-none');
    } else {
        icon.innerHTML = '&times;';
        icon.classList.add('icon-closed');
        icon.classList.remove('.icon');

        navMenu.classList.remove('d-none');
    }

    responsiveNavOpen = !responsiveNavOpen;
}

function closeNavMenu() {
    responsiveNavOpen = false;

    icon.innerHTML = '&#9776;';
    icon.classList.remove('icon-closed');

    navMenu.classList.add('d-none');
}

function handleResize() {
    var screenWidth = window.innerWidth;

    if (screenWidth >= 1000) {
        navMenu.classList.add('d-none');
    } else if (responsiveNavOpen) {
        navMenu.classList.remove('d-none');
    }
}

window.addEventListener('resize', handleResize);

function toggleAccordions(id) {
    const article = document.getElementById('link-' + id);
    const articleSection = document.getElementById('article-' + id);

    if (article.innerHTML === 'Leer más') {
        article.innerHTML = 'Leer menos';

        setTimeout(() => {
            articleSection.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
        }, 250);
    }
    else article.innerHTML = 'Leer más';

    let i = 1;
    let accordion = document.getElementById('link-' + i);

    while (accordion !== null) {
        if (i !== id && accordion.ariaExpanded === 'true') {
            const collapseElement = document.getElementById('collapseExample' + i);
            const isCollapsed = collapseElement.classList.contains('show');

            if (isCollapsed) {
                var bsCollapse = new bootstrap.Collapse(collapseElement, {
                    toggle: false
                });

                bsCollapse.hide();
            }

            accordion.ariaExpanded = 'false';
            accordion.innerHTML = 'Leer más';
        }

        i++;
        accordion = document.getElementById('link-' + i);
    }
}