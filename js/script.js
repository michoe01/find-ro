const dropdownOvelser = document.querySelector('.dropdown-ovelser');
const linkOvelser = document.querySelector('.dropdown-ovelser > a');

if (dropdownOvelser && linkOvelser) {
    linkOvelser.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!dropdownOvelser.classList.contains('menu-aaben')) {
                event.preventDefault();
                dropdownOvelser.classList.add('menu-aaben');
            }
        }
    });
}