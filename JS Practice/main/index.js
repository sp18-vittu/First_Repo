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


 {
    // **********    JSON     *************************
     
    // creating a javascript string containing JSON syntax
    let text = '{ "employees" : [' +                            
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    // Then, using the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object

    let obj=JSON.parse(text);    // here obj is now a normal JS object

    // then use  this object as used normally in javascript
    console.log(obj);
    
 }














