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

let hero__top = document.createElement(".nav");
hero__top.setAttribute("class", "hero__nav");
let hero__img = document.createElement("img");
hero__img.setAttribute("class", "hero__img");
hero__img.src = hero.image;
let hero__kort = document.createElement("div");
hero__kort.setAttribute("class","hero__card");

let services_section = document.querySelector(".services");
services.forEach((service) => {
    let card = document.createElement("section");
    card.setAttribute("class", "services__card");
    let billede = document.createElement("img");
    let title = 

