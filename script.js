"use-strict";

const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];

const homeworldsRaw = [];
for (const character of characters) {
  homeworldsRaw.push(character.homeworld ?? "Other");
}

const homeworldsUnique = [...new Set(homeworldsRaw)];

const homeworldsLowercase = homeworldsUnique.map((el) => el.toLowerCase());

const homeworlds = homeworldsLowercase;

const contentContainer = document.getElementById("content");

const btnToggle = document.getElementById("btnToggle");
btnToggle.onclick = renderCharacters;

const filtersContainer = document.getElementById("homeworlds-filter-container");

homeworlds.forEach((homeworld) => {
  const radioInput = `<div class="form-check">
  <input class="form-check-input" type="radio" value="${homeworld}" id="homeworld-${homeworld}" name="homeworld">
  <label class="form-check-label" for="homeworld-${homeworld}">
  ${homeworld}
  </label>
</div>`;

  filtersContainer.innerHTML += radioInput;
});

const radios = document.querySelectorAll("#homeworlds-filter-container input");

let filteredValue = null;
for (const radio of radios) {
  radio.addEventListener("change", function (i) {
    filteredValue = i.target.value;
    removeCharacters();
    renderCharacters();
  });
}

function removeCharacters() {
  contentContainer.innerHTML = "";
  btnToggle.innerText = "Karakterleri Goster";
  btnToggle.classList.replace("btn-secondary", "btn-primary");
  btnToggle.onclick = renderCharacters;
}

function renderCharacters() {
  const newRow = document.createElement("div");
  newRow.classList.add("row");
  contentContainer.appendChild(newRow);

  for (const character of characters) {
    const homeworld = character.homeworld ?? "other";
    const homeworldLowercase = homeworld.toLowerCase();

    if (homeworldLowercase === filteredValue || filteredValue === null) {
      newRow.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${character.pic}" class="card-img-top" alt="${character.name} Photo">
        <div class="card-body">
          <h5 class="card-name">${character.name}</h5>
          <p class="card-hw">${character.homeworld}</p>
        </div>
      </div>`;
    }
  }
  btnToggle.innerText = "Karakterleri Gizle";
  btnToggle.classList.replace("btn-primary", "btn-secondary");
  btnToggle.onclick = removeCharacters;
}
