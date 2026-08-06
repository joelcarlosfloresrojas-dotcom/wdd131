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

const select=document.getElementById('tourist')
array_tour.forEach((tour)=>{

    const op=document.createElement("option");
    op.value=tour.rating;
    op.textContent=tour.name;
    select.appendChild(op);
});

const radios = document.querySelectorAll('input[name="purpose"]');

const sectionMap = {
    'general': '.hidden1',
    'booking': '.hidden2',
    'custom': '.hidden3',
    'feedback': '.hidden4'
};
const text=document.getElementById('inquiry');
const text1=document.getElementById('support');
const date =document.getElementById('trip-date');

function cleaner(){
      text.value="";
      text1.value="";
      date.value = ""; 
      select.value = "";
}

function Hider() {
      cleaner();
    radios.forEach(radioElement => {
        const targetDiv = document.querySelector(sectionMap[radioElement.value]);
       
        if (radioElement.checked) {
            targetDiv.style.display = 'block';
        } else {
            targetDiv.style.display = 'none';
        }
    });
}


radios.forEach(radioElement => {
    radioElement.addEventListener('change',Hider);
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
