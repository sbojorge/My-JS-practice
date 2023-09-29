let passport = true;
let ticket = true;
let weapons = false;
let a = 10;
let b = 5;

let either = a > 10 || b <= 5;
console.log(either);

let getOnFlight = passport && ticket && !weapons;
console.log(getOnFlight);