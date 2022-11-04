const arr=[9,8,7];
Array.prototype.myfunc=function(){
    return("i am a user defined method of arr");
}

console.log(arr.myfunc());
const arr2=[1,2,3];
console.log(arr2.myfunc());