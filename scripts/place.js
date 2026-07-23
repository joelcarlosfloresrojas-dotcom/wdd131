document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const Temperature = document.querySelector('#temperature');
const Speed = document.querySelector('#speed');
let Chill = document.querySelector('#chill');
let NTemperature = Temperature.textContent;
let NTemperature1 = parseFloat(NTemperature);

let NSpeed = Speed.textContent;
let NSpeed1 = parseFloat(NSpeed);

if (NTemperature1 <= 10 && NSpeed1 > 4.8) {
    let windChill = 13.12 + (0.6215 * NTemperature1) - (11.37 * Math.pow(NSpeed1, 0.16)) + (0.3965 * NTemperature1 * Math.pow(NSpeed1, 0.16));
    Chill.textContent = windChill.toFixed(1) + " °C";
} else {
    Chill.textContent = "N/A";
}