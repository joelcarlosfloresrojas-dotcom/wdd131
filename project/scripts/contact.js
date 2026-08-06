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
    name: "Another One",
    rating: 0
  },
];

const select = document.getElementById('tourist');
array_tour.forEach((tour) => {
    const op = document.createElement("option");
    op.value = tour.rating;
    op.textContent = tour.name;
    select.appendChild(op);
});

const radios = document.querySelectorAll('input[name="purpose"]');

const sectionMap = {
    'general': { selector: '.hidden1', input: document.getElementById('inquiry') },
    'booking': { selector: '.hidden2', input: document.getElementById('trip-date') },
    'custom':  { selector: '.hidden3', input: document.getElementById('tourist') },
    'feedback':{ selector: '.hidden4', input: document.getElementById('support') }
};

function Hider() {
    radios.forEach(radioElement => {
        const config = sectionMap[radioElement.value];
        const targetDiv = document.querySelector(config.selector);
       
        if (radioElement.checked) {
            targetDiv.style.display = 'block';
            config.input.setAttribute('required', 'required');
        } else {
            targetDiv.style.display = 'none';
            config.input.removeAttribute('required');
            config.input.value = "";
        }
    });
}

radios.forEach(radioElement => {
    radioElement.addEventListener('change', Hider);
});

Hider();

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

const form = document.querySelector("form");

    
setTimeout(() => {
        form.reset(); 
    }, 10); 