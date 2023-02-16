document.addEventListener("DOMContentLoaded", function() {

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut
//let doc_head = document.querySelector("head");
//let favicon = document.createElement(".link")
//favicon.href = hero.icon;
////favicon.rel = "icon";
//favicon.type = "image/x-icon";

//dog__head.append(favicon);
let hero__section = document.querySelector(".hero");

let hero__top = document.createElement("nav");
hero__top.setAttribute("class", "hero__main");
//let hero__img = document.createElement("img");
//hero__img.setAttribute("class", "hero__img");
//hero__img.src = hero.image;
//let hero__kort = document.createElement("div");
//hero__kort.setAttribute("class","hero__card");



hero__section.innerHTML = `
<nav class="hero__top"></nav>
<img src="${hero.image}" alt ="${hero.headline}">
    <div class="hero__kort">
    <h1>${hero.headline}</h1>
    <p>${hero.copy} </p>
    </div> `;

let services_section = document.querySelector(".services");
services.forEach((service) => {
    let card = document.createElement("section");
    card.setAttribute("class", "services__card");
    let billede = document.createElement("img");
    let title = document.createElement("h2");
    let kort_tekst = document.createElement("p");
    let kort_link = document.createElement("a");

    billede.src = service.illustration
    title.textContent = service.headline;
    kort_tekst.textContent = service.text;
    kort_link.textContent = service.linktext;

    card.append(billede);
    card.append(title);
    card.append(kort_tekst);
    card.append(kort_link);
    services_section.append(card);
});
const facilitiesContainer = document.createElement('div');
facilitiesContainer.className = 'facilities';
facilitiesContainer.innerHTML = `
  <h2>${facilities.headline}</h2>
  <ul>
    ${facilities.options.map(option => `
      <li>
        <img src="${option.icon}" alt="">
        <h3>${option.headline}</h3>
        <p>${option.text}</p>
      </li>
    `).join('')}
  </ul>
`;


document.body.appendChild(facilitiesContainer);

const sitesContainer = document.createElement('div');
sitesContainer.className = 'sites';
sitesContainer.innerHTML = `
  <div class="sites-header">
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <button><img src="${sites.btnicon}" alt=""></button>
  </div>
  <ul>
    ${sites.places.map(place => `
      <li>
        <img src="${place.img}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.city}</p>
      </li>
    `).join('')}
  </ul>
`;


document.body.appendChild(sitesContainer);

const advantagesContainer = document.createElement('div');
advantagesContainer.className = 'advantages';

const advantagesList = document.createElement('ul');
advantages.forEach((advantage) => {
  const advantageItem = document.createElement('li');
  advantageItem.innerHTML = `
    <div class="icon-container">
      <img src="${advantage.icon}" alt="">
    </div>
    <h3>${advantage.headline}</h3>
    <p>${advantage.text}</p>
  `;
  advantagesList.appendChild(advantageItem);
});

advantagesContainer.appendChild(advantagesList);

// Create the footer container element
const footerContainer = document.createElement('footer');
footerContainer.className = 'footer';

// Create the footer headline element
const footerHeadline = document.createElement('h2');
footerHeadline.textContent = footerData.headline;
footerContainer.appendChild(footerHeadline);

// Create the footer text element
const footerText = document.createElement('p');
footerText.textContent = footerData.text;
footerContainer.appendChild(footerText);

// Create the sitemap container element
const sitemapContainer = document.createElement('div');
sitemapContainer.className = 'sitemap';
footerContainer.appendChild(sitemapContainer);

// Create the sitemap items
footerData.sitemap.forEach((sitemapItem) => {
  // Create the sitemap header
  const sitemapHeader = document.createElement('h3');
  sitemapHeader.textContent = sitemapItem.header;
  sitemapContainer.appendChild(sitemapHeader);

  // Create the sitemap links
  const sitemapLinks = document.createElement('ul');
  sitemapItem.links.forEach((link) => {
    const sitemapLink = document.createElement('li');
    const sitemapLinkText = document.createElement('a');
    sitemapLinkText.textContent = link.text;
    sitemapLink.appendChild(sitemapLinkText);
    sitemapLinks.appendChild(sitemapLink);
  });
  sitemapContainer.appendChild(sitemapLinks);
});

// Create the rights reserved message
const rightsMessage = document.createElement('p');
rightsMessage.textContent = footerData.sitemap[3].header;
footerContainer.appendChild(rightsMessage);

// Append the footer element to the document body
document.body.appendChild(footerContainer);

  


