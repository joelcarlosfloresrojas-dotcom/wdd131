document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu');
    const navMenu = document.querySelector('nav');
    const logo = document.querySelector('header img');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
        logo.classList.toggle('hide');
    });
});