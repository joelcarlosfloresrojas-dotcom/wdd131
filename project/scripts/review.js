
let number = Number(window.localStorage.getItem("number")) || 0;


number++;

localStorage.setItem("number", number);


document.getElementById("review-counter").textContent = number;

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;