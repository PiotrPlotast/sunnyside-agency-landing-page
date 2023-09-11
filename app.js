const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');
toggle.addEventListener('click', () => {
    toggle.ariaExpanded = "true";
    menu.style.display = "block";
})