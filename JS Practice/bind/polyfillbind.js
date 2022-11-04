let person = {
    firstname: "Vittu",
    lastname: "Singh"
};

let printPersonDetails = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " is from " + hometown + ", " + state + ", " + country);
};
// printPersonDetails(person, "Champaran", "Bihar");
let PrintMyDatails = printPersonDetails.bind(person, "Champaran", "Bihar");
console.log("Coming from original bind :");
PrintMyDatails("India");

Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params,...args2]);
    };
};

let PrintMyDatails2 = printPersonDetails.mybind(person, "Champaran", "Bihar");
console.log("Coming from My own bind :");
PrintMyDatails2("India");


