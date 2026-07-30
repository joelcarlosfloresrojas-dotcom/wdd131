document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const courseTitle = document.querySelector('#course-title');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    courseTitle.classList.toggle('hide');
});

const title1=document.getElementById("title")
const temples = [
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Atlanta Georgia",
    location: "Sandy Springs, Georgia, United States",
    dedicated: "1983, June, 1",
    area: 34500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
  },
  {
    templeName: "Baton Rouge Louisiana",
    location: "Baton Rouge, Louisiana, United States",
    dedicated: "2000, July, 16",
    area: 10890,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/400x250/1-ea20b19384c9f98d17ef56b627c79c3a75f62cb3.jpeg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Münchenbuchsee, Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-1053202-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
  },
];
 const helper=document.getElementById("temple-galery");

 function DisplayImages(list){
    helper.innerHTML = "";
    list.forEach(temple => {

        const info = document.createElement("section")

       info.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area} sq ft</p>
            <img 
            src="${temple.imageUrl}" 
            alt="${temple.templeName} Temple" 
            loading="lazy" 
            >
        `;
    helper.appendChild(info);
    });
 }
 DisplayImages(temples)


const oldbutton=document.getElementById("btn-old")

oldbutton.addEventListener("click", () => {
    title1.textContent="Old"
    const oldTemples = temples.filter(templeold=> templeold.dedicated.split(",")[0]<1900)
    DisplayImages(oldTemples)
});

const newbutton =document.getElementById("btn-new")

newbutton.addEventListener("click",()=>{
    title1.textContent="New"
    const newtemples=temples.filter(templesnew=> templesnew.dedicated.split(",")[0]>2000)
    DisplayImages(newtemples)
});

const smallbutton=document.getElementById("btn-small")

smallbutton.addEventListener("click",() =>{
    title1.textContent="Small"
    const smallTemples=temples.filter(templesSmall=>templesSmall.area<10000)
    DisplayImages(smallTemples)
});

const largeButton=document.getElementById("btn-large")

largeButton.addEventListener("click",()=>{
    title1.textContent="Large"
    const largeTemples=temples.filter(templesLarge=>templesLarge.area>90000)   
    DisplayImages(largeTemples) 
});

const homeButton=document.getElementById("btn-home")

homeButton.addEventListener("click",() =>{
    title1.textContent="Home"
    DisplayImages(temples)
});