{// *************  for in   *************
    // const obj={fname:"Vittu",lname:"Singh"};
    // for (let x in obj){
    //     console.log(x, obj[x]);      // x represents keys ,  obj[x] represents value of key x in obj
    // }

}


{// *************  for of   ************
    {   //array
        // const arr = [11, 22, 33];
        // for (const elements of arr) {
        //     console.log(elements);

        // }
    }

    {   //String
        // const str = "Vittu Singh";
        // for (const char of str) {
        //     console.log(char);
        // }

    }
}

{// *************  label with continue abd break   *************

    // loop1:
    // for (let i = 0; i < 3; i++) {     
    //     loop2:
    //     for ( let j = 0; j < 3; j++) {   
    //         if (i === 1 && j === 1) {
    //             continue loop2;
    //         }
    //         console.log(`i = ${i}, j = ${j}`);
    //     }
    // }


}


{ // *************  Maps  *************

    /*  let map = new Map()
  
      map.set("one", "first element");
      map.set("two", "second element");
      map.set(3, "third element");
      console.log(map.get(3));    // returns value of key , here key given is 3 so it returns "third element"
  
      map.forEach(function(value, key) {
          console.log(`${key}=${value}`);
          console.log(typeof(key));
          console.log(typeof(value));
      })
      console.log(map.keys());     //returns an iterator
      console.log(map.values());     //returns an iterator
      console.log(map.entries());     //returns an iterator
  
      for (const ent of map) {
          
          console.log(ent);
      }
      for (const [key,value] of map) {
          console.log(key,value);
  
          // if(typeof(key) === "number"){
          //     console.log(key.toString(),value);
          // }else{
  
          //     console.log(key,value);
          // }
      }
      for (const key of map.keys()) {
          console.log(key);
      }
      for (const value of map.values()) {
          console.log(value);
      }
      for (const entry of map.entries()) {
          console.log(entry);
      }
  */
}


{// **********    JSON     ************************* 


    // creating a javascript string containing JSON syntax
    // let text = '{ "employees" : [' +                            
    // '{ "firstName":"John" , "lastName":"Doe" },' +
    // '{ "firstName":"Anna" , "lastName":"Smith" },' +
    // '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    // Then, using the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object

    // let obj=JSON.parse(text);    // here obj is now a normal JS object

    // then use  this object as used normally in javascript
    // console.log(obj);

}


{       // **********   simple Counter ****************


    // let counter = 0;
    // document.getElementById("CounterDisplay").textContent = counter;
    // document.getElementById("inc").addEventListener("click", increment);
    // document.getElementById("dec").addEventListener("click", decrement);
    // document.getElementById("reset").addEventListener("click", reset);

    // function increment() {
    //     if (counter === 10) {
    //         window.alert("Maximum Limit Reached");
    //         return;
    //     }
    //     counter += 1;
    //     display();
    // }
    // function decrement() {
    //     if (counter < 1) { 
    //         window.alert("Minimum Limit Reached");
    //         return; }
    //     counter -= 1;
    //     display();
    // }
    // function reset() {
    //     counter = 0;
    //     display();
    // }
    // function display() {
    //     document.getElementById("CounterDisplay").textContent = counter;
    // }

}

{  // ************      Iterables ***************   

    {//    *****  Homemade iterable *****
        // function myNumbers(){
        //     let n=0;
        //     return {
        //         next : function(){
        //             n+=1;
        //             return { value:n, done:false};
        //         }
        //     };
        // }
        // //create iterable 
        // const n=myNumbers();

        // console.log(n.next().value);
        // console.log(n.next().value);
        // console.log(n.next().value);
        // console.log(n.next().value);
    }

    // {   //   *******   using Symbol.iterator ********

    //     // Create an Object
    //     myNumbers = {};

    //     // Make it Iterable
    //     myNumbers[Symbol.iterator] = function () {
    //         let n = 0;
    //         done = false;
    //         return {
    //             next() {
    //                 n += 10;
    //                 if (n == 100) { done = true; }
    //                 return { value: n, done: done };
    //             }
    //         };
    //     };

    //     // Now you can use for..of
    //     for (const num of myNumbers) {
    //         // Any Code Here               // The Symbol.iterator method is called automatically by for..of
    //     }

    //     // But we can also do it "manually":
    //     let iterator = myNumbers[Symbol.iterator]();

    //     while (true) {
    //         const result = iterator.next();
    //         if (result.done) break;
    //         // Any Code Here
    //     }

    // }

}


{   // *******   cool Object methods   *******

    //     let testObj = {
    //         fname: "Vivek",
    //         lname: "Singh",
    //         designation: "FrontEnd Engineer",
    //         languages: ["HTML", "CSS", "JavaScript"]
    //     };
    //     console.log(testObj);
    //     console.log(testObj.country);   //undefined


    //     // 1 Adding or changing an object property
    //     //syntax :       Object.defineProperty(object, property, descriptor)

    //     //NOTE : when you add a new property to the object by using Object.defineProperty , 
    //     //                    By default, the (writable,enumerable,configurable) becomes FALSE
    //     //        But when you change the existing property value using object.defineProperty , 
    //     //                    the (writable,enumerable,configurable) is not changed until you specifically change it

    //     Object.defineProperty(testObj, "country", { value: "India" });
    //     Object.defineProperty(testObj, "lname", { value: "Dahiya" });
    //     console.log(testObj);
    //     console.log(testObj.country);   //India


    //     // 2 Adding or changing object properties
    //     //syntax:   Object.defineProperties(object, descriptors);
    //     Object.defineProperties(testObj, {
    //         "gender": {
    //             value: "Male",
    //             writable: false

    //         },
    //         "city": {
    //             value: "Delhi",
    //             writable: true
    //         }
    //     });
    //     testObj.gender = "jsbdf";  // gender property is not affected by this as it has been made un-writable 

    //     //3 Accessing Properties
    //     // syntax :     Object.getOwnPropertyDescriptor(object, property);
    //     console.log(Object.getOwnPropertyDescriptor(testObj, "lname"));
    //     console.log(testObj);


    //     // 4 Returns all properties as an array , irrespective of their (writable,enumerable,configurable)
    //     // syntax: Object.getOwnPropertyNames(object);
    //     console.log(Object.getOwnPropertyNames(testObj));   // ar array containing all properties


    //     //5 Accessing the prototype
    //     //syntax:   Object.getPrototypeOf(object);
    //     let result = Object.getPrototypeOf(testObj);
    //     console.log(result);


    //     //6 Returns enumerable properties as an array
    //     //syntax:    Object.keys(object);
    //     let result1 = Object.keys(testObj);
    //     console.log(result1);


    //     //7 Prevents adding properties to an object
    //     // Object.preventExtensions(object);

    //     //8 Returns true if properties can be added to an object
    //     //Object.isExtensible(object);

    //     //9 Prevents changes of object properties (not values)
    //     //Object.seal(object);

    //     //10 Returns true if object is sealed
    //     //Object.isSealed(object);

    //     //11 Prevents any changes to an object
    //     //Object.freeze(object);

    //     //12 Returns true if object is frozen
    //     //Object.isFrozen(object);
}

{
    //     let originalArray= [7, 5, 2, 3, 4, 10, 11];
    //     let changedArray = [7, 5, 2, 3, 4];


    //     var inCurrent = {};
    //     var removedElements = [];
    //     for (let x of changedArray)
    //         inCurrent[x] = true;
    //     for (let x of originalArray) {
    //         if (!inCurrent[x]) {
    //             removedElements.push(x);
    //         }
    //     }
    //     console.log(`the missing elements are ${removedElements}`);
    // }


    // {
    //     var myArr = [3, 2, 4, 5, 7, 6, 1];
    //     var min = arr[0];
    //     var max = arr[0];
    //     var minIndex = 0;
    //     var maxIndex = 0;

    //     // function compare(a,b){
    //     //     if(a<b) return -1;
    //     //     if(a>b) return 1;
    //     //     if(a=b) return 0;

    //     // }
    //     // function reset(arr) {
    //     //     min = arr[0];
    //     //     max = arr[0];
    //     // }
    //     function deleteElement(arr, min,max,minIndex,maxIndex) {
    //         let updatedArray=[];
    //         for (i = 0; i < arr.length - 1; i++) {
    //             if(i===minIndex){


    //             }
    //             else{
    //             }
    //         }
    //     }
    //     function minmax(arr) {
    //         for (let i = 0; i < arr.length - 1; i++) {
    //             if (arr[i] < min) {
    //                 min = arr[i];
    //                 minIndex = i;
    //             }
    //             if (arr[i] > max) {
    //                 max = arr[i];
    //                 maxIndex = i;
    //             }

    //         }
    //         // deleteElement(arr,min,max,minIndex,maxIndex);
    //     }

    //     function logic(arr) {

    //         for (let i = 0; i < 4; i++) {

    //         }


    //     }




}

{   // **********  min max of array  *********


    //     function logic(a) {
    //         for (i = 0; i < a.length - 1; (a[i] > a[i + 1])
    //             ? ((a[i] = a[i] ^ a[i + 1]) && (a[i + 1] = a[i] ^ a[i + 1]) && (a[i] = a[i] ^ a[i + 1]) && (i = 0))
    //             : i++) { 
    //             }
    //         return a;
    //     } 
    //     let originalArray=[];
    //     let size=Number(prompt("Enter size of Array "));
    //     for(let i=0;i<size;i++){
    //         originalArray[i]=Number(prompt(`Enter element ${i+1} : `));
    //     }


    //     let sortedArray= logic(originalArray);
    //     let minSum=sortedArray[0]+sortedArray[1]+sortedArray[2]+sortedArray[3];
    //     let maxSum=sortedArray[size-4]+sortedArray[size-3]+sortedArray[size-2]+sortedArray[size-1];
    //     window.alert(`4 elements which gives the minimum sum are ${sortedArray[0]}, ${sortedArray[1]}, ${sortedArray[2]}, ${sortedArray[3]} and the minimum sum is ${minSum}`);
    //     alert(`4 elements which gives the maximum sum are ${sortedArray[size-1]}, ${sortedArray[size-2]}, ${sortedArray[size-3]} and  ${sortedArray[size-4]} and the maximum sum is ${maxSum}`);




}


{// *********  call back *************


    //     function loadScript(src, callback) {
    //         var script = document.createElement("script");
    //         script.src = src;
    //         script.onload = function () {
    //             console.log("Loaded script with SRC: " + src);
    //             callback(null, src);
    //         };
    //         script.onerror = function () {
    //             console.log("Error loading script with SRC: " + src);
    //             callback(new Error("Src got some error"));
    //         };
    //         document.body.appendChild(script);
    //     }

    //     function hello(error, src) {
    //         if (error) {
    //             console.log(error);
    //             return;
    //         }
    //         alert('Hello World!' + src);
    //     }


    //     function goodmorning(error, src) {

    //         if (error) {
    //             console.log(error);
    //             sendEmergencyMessageToCeo();
    //             return;
    //         }
    //         alert('Good morning' + src);
    //     }

    //     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning);

}


{// promise
    //     let p= new Promise((resolve,reject)=>{
    //         resolve(2);
    //         // reject(new Error("I am an error"));
    //     });
    //     p.then((value)=>{
    //         console.log(value);
    //         console.log(p);
    //     })
    //     .catch((error)=>{
    //         console.log(error.name);
    //         // console.log(error.message);
    //         console.log(p);
    //     });
    //     async function test(){
    //         setTimeout(() => {
    //             console.log("I am in async function");
    //         }, 2000);
    //         return 10;
    //     }
    //     let output=test();
    //     output.then((value)=>{
    //         console.log(`The result from asyn func is ${value}`);
    //     })

}

{     // debouncing 
    // let counter = 0;
    // // const getData=(lname)=>{                    //arrow functions ignore the this variable, so if we want this func to point to some other this, we will write this as normal function like done before
    // //     // calls an API and gets Data
    // //      console.log("Fetching data...",counter++,this.fname,lname);
    // // }
    // function getData(text = "Singh is a frontEnd Developer") {           // to use thisVariable , we wrote this func without use of arrow func syntax

    //     console.log("Fetching data...", counter++, this.fname ? this.fname : "Vittu", text);

    // }
    // const debounce = function (fn, d, text) { 
    //     let timer;
    //     return function () {
    //         let obj = { fname: "Vittu" };
    //         // let context=this;
    //         clearTimeout(timer);
    //              timer = setTimeout(() => {
    //             fn.call(obj, text);
    //         }, d);
    //     };
    // };
    // const betterFunction = debounce(getData, 300, "Singh is a frontEnd Developer");

}


{     // throttling
    // let counter = 0; 
    // function expensive(text="running Expensive Function") { 
    //     console.log("Fetching data...", counter++, this.sampleText ? this.sampleText : "We are",text);

    // }
    // const throttle = function (func, limit,text) { 
    //     let flag= true;
    //     return function () {
    //         // let context=this;
    //         let context = { sampleText: "We are" };
    //         if(flag===false) return
    //         if(flag){
    //             func.call(context,text);
    //             flag=false;
    //             setTimeout(() => {
    //                 flag=true;
    //             }, limit);
    //         }
    //     };
    // };
    // const betterExpensive = throttle(expensive, 1000, "running throttled version of Expensive Function");

}


{// function currying
    // function currying using bind

    //     let multiply=function(x,y){
    //         console.log(x*y);
    //     }

    //     let multiplyByTwo=multiply.bind(this,2);  //  here 2 is set to x,    this is called function currying (presetting parameter of a function)
    //     multiplyByTwo(5);        // 5 will go in y,   and will log 10 as answer



    //     // another way of implementing function currying :  use closures

    //     let add =function (x){
    //         return function(y){    
    //             console.log(x+y);   
    //         }
    //     }
    //     let add5toNumber= add(5);
    //     add5toNumber(10);
    //     // alternatively add(5)(6);


    // another example of currying using closures
    // function sum(x) {
    //     return function (y) {
    //         // if(y){      
    //         //     return sum(x+y);
    //         // }else return x;
    //     };
    // }
    // console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());


}


{    // event bubbling , capturing/trickling
    // capturing/trickling : trickling down the events , going inside
    // event bubbling : bubbling up , going up
    // BY DEFAULT : First capturing down happens and then bubbling up happens


    // document.querySelector("#grandparent").addEventListener('click',()=>{
    //     console.log("GrandParent Clicked !");
    // },true);    // third argument here is the value for useCapture
    // document.querySelector("#parent").addEventListener('click',()=>{
    //     console.log("Parent Clicked !");
    // },false);
    // document.querySelector("#child").addEventListener('click',()=>{
    //     console.log("child Clicked !");
    // },true);
}

{ // event delegation 
    // : attaching single event to the parent instead of attaching separate events  to each child elements   
    // document.querySelector("#category").addEventListener('click',(e)=>{
    //     // console.log(e.target);  
    //     if(e.target.tagName=='LI'){    // to redirect only li items
    //         window.location.href="/"+e.target.id;
    //     }
    // })
}

const imgInput = document.querySelector('input')
const imgEl = document.querySelector('img')
imgInput.addEventListener('change', () => {
  if (imgInput.files && imgInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgEl.src = e.target.result;
    }
    reader.readAsDataURL(imgInput.files[0]);
  }
})