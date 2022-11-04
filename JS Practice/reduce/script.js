const users = [
    { firstName: "prateek", lastName: "parashar", age: 26 },
    { firstName: "mayank", lastName: "arora", age: 75 },
    { firstName: "vivek", lastName: "dahiya", age: 50 },
    { firstName: "garv", lastName: "jain", age: 26 },
];

const output = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;

}, {});

test = [1, 2, 3];
word = "hello";



const testobj = { firstName: "pratik", lastName: "parashar", age: 26 , 54:6};
console.log(output);
console.log(typeof (output));
console.log(typeof (users));
console.log(typeof (test));
console.log(typeof (word));
console.log(users);
console.log(users[0]);
console.log(typeof (users[0]));
console.log(output[26]);
console.log(users[0]['firstName']);
console.log(testobj['firstName']);
console.log(testobj[54]);
console.log(typeof(testobj['54']));