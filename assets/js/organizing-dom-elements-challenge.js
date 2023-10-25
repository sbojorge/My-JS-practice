function buildDataTable() {
  let tbody = document.getElementsByTagName("tbody")[0];
  let rows = tbody.children;

  let people = [];

  for (let row of rows) {
    let person = {}; // creates 4 separate objects

    let cells = row.children;
    person.name = cells[0].textContent;
    person.rating = cells[1].textContent;
    person.review = cells[2].textContent;
    people.push(person);
  }

  return people;
}

let data = buildDataTable();
console.log(data);

