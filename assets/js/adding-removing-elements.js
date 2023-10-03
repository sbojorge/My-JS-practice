const createShoppingList = () => {
  // get the body, just for convinience
  let body = document.body;

  // create a heading
  let newHeading = document.createElement("h3");

  // add content to the heading
  newHeading.innerHTML = "Shopping list";

  // append the heading to the body
  body.appendChild(newHeading);

  // create the list
  let shoppingList = document.createElement("ul");

  // create an array of items to add
  let shoppingItems = ["Milk", "Butter", "Eggs"];

  // loop through the array and create li elements
  for (let i of shoppingItems) {
    let listItem = document.createElement("li");
    listItem.innerHTML = i;
    shoppingList.appendChild(listItem);
  }

  // append the list to the body
  body.appendChild(shoppingList);

  // when shopping is completed, clear out the shopping list and add the purchased items to kitchen stock
  let newButton = document.createElement("button");
  newButton.innerHTML = "Finished shopping";

  // Set the onclick attribute to call the addToKitchenStock() function below
  newButton.setAttribute("onclick", "addToKitchenStock();");

  // append the button to the body
  body.appendChild(newButton);
};

const addToKitchenStock = () => {
  // first remove the shopping list heading
  let shoppingListHeading = document.getElementsByTagName("h3")[1];
  shoppingListHeading.remove();

  // Get both lists, then iterate through the shopping list's children (the <li> elements), cloning each item and appending it to the kitchen stock list
  let kitchenStock = document.getElementsByTagName("ul")[0];
  let shoppingList = document.getElementsByTagName("ul")[1];
  for (let i = 0; i < shoppingList.children.length; i++) {
    let clone = shoppingList.children[i].cloneNode(true)
    kitchenStock.appendChild(clone);
}

  // remove the old shopping list and the buttons
  shoppingList.remove();
  let i = 0;
  while (i < 2) {
    /* This removes the first button in the document each time.
        We need to do it this way since once we delete the first
        one, the 2nd one's index is now 0 */
    document.getElementsByTagName("button")[0].remove();
    i++;
  }

  // insert a completion note at the top
  let complete = document.createElement("p");
  complete.innerHTML = "Shopping complete!";
  complete.style.color = "red";
  complete.style.fontWeight = "bold";
  let kitchenStockHeading = document.getElementsByTagName("h3")[0];
  document.body.insertBefore(complete, kitchenStockHeading);
};
