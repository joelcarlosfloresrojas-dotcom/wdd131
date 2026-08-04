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



const radioButtons = document.querySelectorAll('input[name="purpose"]');

radioButtons.forEach(radio=>{
    radio.addEventListener('change',function(){



    })


});