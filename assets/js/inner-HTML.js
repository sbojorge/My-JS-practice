const display = () => {
  let body = document.body;
  let myDiv = document.getElementsByTagName("div")[0];

  let html = `
  <h1>Hello!</h1>
  <p>Here is some complex HTML that will be inserted into this div.</p>
  <p>It contains a heading, paragraphs, and even a list with a class.</p>
  <ul class="special-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
`;

  myDiv.innerHTML = html; // The div will now render all the above HTML!
  body.appendChild(myDiv);
};

// the runnable example
const createShoppingList = () => {
  // create a div to hold everything
  let shoppingListDiv = document.createElement("div");

  // Set the div's innerHTML to the shopping list
  // Notice the use of backticks (``) to create a multiline string
  shoppingListDiv.innerHTML = `
    <h3>Shopping list</h3>
    <ul>
        <li>Milk</li>
        <li>Butter</li>
        <li>Eggs</li>
    </ul>
    `;

  // Find the first button and insert the div before it
  let secondButton = document.getElementsByTagName("button")[1];
  document.body.insertBefore(shoppingListDiv, secondButton);
};

// the challenge
const todayReport = () => {
  document.getElementById("report").innerHTML = `
    <h4>Today</h4>
        <p>Scattered thunderstorms</p>
        <ul>
            <li>Temp: 29C</li>
            <li>Precipitation: 25%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 16km/h</li>
        </ul>
    `;
};

const tomorrowReport = () => {
  document.getElementById("report").innerHTML = `
    <h4>Tomorrow</h4>
        <p>Partly cloudy</p>
        <ul>
            <li>Temp: 27C</li>
            <li>Precipitation: 20%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13km/h</li>
        </ul>
    `;
};
