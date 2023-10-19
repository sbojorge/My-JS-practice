let cocktails = [
  "Daiquari",
  "Dry Martini",
  "Margatrita",
  "Manhattan",
  "Mojito",
  "Mai Tai",
];

let list = document.createElement("ul");
let listItems = "";
for (let i in cocktails) {
  listItems += `
    <li>${cocktails[i]}</li>
  `;
}

list.innerHTML = listItems;
document.body.appendChild(list);
