let company = {
  name: "Apple Inc",
  founded: 1976,
  financials: {
    incomeStatement: {
      years: [2020, 2019, 2018],
      revenue: [125, 120, 115],
      costs: [100, 100, 100],
      profit: [25, 20, 15],
    },
    balanceSheet: {
      years: [2020, 2019, 2018],
      assets: [200, 190, 180],
      liabilties: [100, 95, 90],
      equity: [100, 95, 90],
    },
    cashFlow: {
      years: [2020, 2019, 2018],
      operating: [75, 65, 55],
      investing: [22, 20, 18],
      financing: [-94, -80, -75],
    },
  },
  competitors: ["Microsoft", "Amazon", "Samsung"],
};

console.log(company["name"]);
console.log(company.competitors);
console.log(company.competitors[0]);
console.log(company.financials.incomeStatement.years);
console.log(company.financials.incomeStatement.revenue[0]);
console.log(company.financials.balanceSheet.assets[1]);
console.log(company.competitors[2]);

let studentData = [
  {
    name: "John Smith",
    email: "john@gmail.com",
    subjects: ["Math", "Psychology", "Physics", "Chemistry", "Biology"],
  },
  {
    name: "Mary Jones",
    email: "mary@gmail.com",
    subjects: ["Fine Art", "Music", "Biology", "Geography", "Politics"],
  },
];

console.log(studentData);
