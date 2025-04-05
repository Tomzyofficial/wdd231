import { places } from "../data/places.mjs";
function displayPlaces(places) {
  places.forEach(element => {
    const theCard = document.createElement("div");
    theCard.classList.add("individualCard")

    const fig = document.createElement("figure");
    const thePhoto = document.createElement("img");
    thePhoto.src = `images/${element.image}`;
    thePhoto.alt = element.name;
    fig.appendChild(thePhoto);
    theCard.appendChild(fig);

    const theTitle = document.createElement("h2");
    theTitle.innerText = element.name;
    theCard.appendChild(theTitle);

    const addr = document.createElement("address");
    addr.innerText = element.address
    theCard.appendChild(addr);

    const desc = document.createElement("p");
    desc.innerText = element.description;
    theCard.appendChild(desc);

    const btn = document.createElement("button");
    btn.innerText = "Learn more";
    theCard.appendChild(btn);

    // div.innerHTML = `
    //   <figure>
    //     <img src ="images/${element.image}" alt="Image" >
    //   <figure/>
    //   <h2>${element.name}<h2/>
    //   <address>${element.address}<address/>
    //   <p>${element.description}<p/>
    //   <button>Learn more</>
    // `;
    document.getElementById("places-card").appendChild(theCard)
  });
}
displayPlaces(places)