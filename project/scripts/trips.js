document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;



const array_tour = [
  {
    name: "Macchu Picchu",
    rating: 5
  },
  {
    name: "Inka Paths",
    rating: 5
  },
  {
    name: "Sacsayhuaman",
    rating: 4
  },
  {
    name: "Seven Colours Mountain",
    rating: 4
  },
  {
    name: "Ollantaytambo",
    rating: 5
  },
  {
    name:"Another One",
    rating: 0
  },
];

const select=document.getElementById('option');
array_tour.forEach((tour)=>{

    const op=document.createElement("option");
    op.value=tour.name;
    op.textContent=tour.name;
    select.appendChild(op);
});

const sectionMap = {
    'Macchu Picchu': '.hidden',
    'Inka Paths': '.hidden1',
    'Sacsayhuaman': '.hidden2',
    'Seven Colours Mountain': '.hidden3',
    'Ollantaytambo': '.hidden4',
    'Another One' :'.hidden5'
};
function helper() {

    const allTables = document.querySelectorAll('.hidden, .hidden1, .hidden2, .hidden3, .hidden4,.hidden5');
    allTables.forEach(table => {
        table.style.display = 'none';
    });

    const selectedPlace = select.value;
    const tableClass = sectionMap[selectedPlace];

    if (tableClass) {
        const tableToShow = document.querySelector(tableClass);
        if (tableToShow) {
            tableToShow.style.display = 'table'; 
        }
    }
}


select.addEventListener('change', helper);

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
