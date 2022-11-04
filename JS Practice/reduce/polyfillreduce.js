//My Reduce Function
Array.prototype.polyfillReduce = function (callbackFunc, initialValAcc = null) {
    let accumulator = initialValAcc;
    for (let i = 0; i < this.length; i++) {
        accumulator = callbackFunc(accumulator, this[i],i,this);
    }
    return accumulator;

};

//Example 1
myArr = [1, 2, 3, 4];

function sum( prevValue, currentValue) {
    return prevValue + currentValue;
}
// const sumofArray = myArr.polyfillReduce((prevValue, currentValue) => prevValue + currentValue);
const sumofArray = myArr.polyfillReduce(sum,2);
console.log("Result from Example 1\n", sumofArray);


//Example 2
const users = [
    { firstName: "prateek", lastName: "parashar", age: 26 },
    { firstName: "mayank", lastName: "arora", age: 75 },
    { firstName: "vivek", lastName: "dahiya", age: 50 },
    { firstName: "garv", lastName: "jain", age: 26 },
];
function agecalc(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;

};
const output = users.polyfillReduce(agecalc, {});
console.log("Result from Example 2\n", output);





