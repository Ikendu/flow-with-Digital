this.greet = "The wrong greet";

function students(name, age, dept) {
  this.name = name;
  this.age = age;
  this.dept = dept;
  this.greet = function () {
    return `${this.name}, ${this.age}, ${this.dept}`;
  };
}
let stu1 = new students("Chidinma", 23, "Mech");
console.log(stu1.greet());

this.car = "Wrong Car";

var myGarage = {
  car: "EasyMoney",
  getCar: function () {
    return this.car;
  },
};
console.log(myGarage.getCar());

let store = myGarage.getCar();
console.log(store);
