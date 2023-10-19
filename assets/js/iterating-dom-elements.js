// create an empty array
let numbers = [];

// put 1000 random numbers in it, between 0 and 1000
let i = 0;
while (i < 1000) {
    numbers.push(Math.floor(Math.random()*1000));
    i++;
};
console.log(numbers);

// create a table element. Give it an id so we can identify it
let table = document.createElement("table");
table.id = "random-numbers";

// create some basic HTML markup for the table structure:
let tableHtml = `
<thead>
    <tr>
        <td>Item #</td>
        <td>Value</td>
    </tr>
</thead>
<tbody>
</tbody>
`;

// set the table's inner html
table.innerHTML = tableHtml;

// Now it's an HTMLElement object, we can get its body
let tbody = table.getElementsByTagName("tbody")[0];
console.log(tbody);

// Iterate the array and append a row to the table body's html for each number. This is using template literals again
let tbodyHtml = '';
for (let i in numbers) {
    tbodyHtml += `
        <tr>
            <td>${i}</td>
            <td>${numbers[i]}</td>
        </tr>
    `;
}

// With iteration complete, we now have a long string of HTML w/ all the rows for the table body...just set it!
tbody.innerHTML = tbodyHtml;

// Append the whole table to the document's body...voila! 1000 rows!
document.body.appendChild(table);


