document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const elevationEl = document.querySelector('#elevation');
const oxygenEl = document.querySelector('#oxygen-level');
const recEl = document.querySelector('#recommendation');

const altitude = parseFloat(elevationEl.textContent);

function calculateOxygen(meters) {
    const oxygen = (100 - (meters * 0.0094)).toFixed(1) + "%";
    
    let advice = "Normal activity";
    if (meters > 3000) {
        advice = "Rest 24h & drink Coca Tea";
    } else if (meters > 2000) {
        advice = "Light walks recommended";
    }

    return { oxygen, advice };
}

const data = calculateOxygen(altitude);

oxygenEl.textContent = data.oxygen;
recEl.textContent = data.advice;

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