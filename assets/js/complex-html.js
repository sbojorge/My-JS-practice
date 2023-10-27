// Define the array of fruits
let fruits = [
  {
    name: "Apple",
    image: "images/apple.png",
  },
  {
    name: "Orange",
    image: "images/orange.png",
  },
  {
    name: "Banana",
    image: "images/banana.png",
  },
];

// Start with the top of the html
let html = `
    <table>
        <thead>
            <tr>
                <th>Fruit</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>    
`;

// Iterate the array to create all the rows and append them
// to the html above one by one. You can even add classes and
// other attributes!
for (let fruit of fruits) {
    let rowHtml = `
        <tr class="fruit-row">
            <td>${fruit.name}</td>
            <td><im<g src= "${fruit.image}" /></td>
        </tr>
    `;
    html += rowHtml;
}

// Finish off the html by closing the tbody and table
html += `
    </tbody>
</table>
`;

// Set the document body's innerHTML to the html string above
document.body.innerHTML = html;