const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.innerHTML = `Last Modified: ${document.lastModified}`