// Create a Javascript function taking an array of numbers as parameter and returning the highest number from that array and its count of occurrence.
// Example Input:
// [1,10,4,10,100,-5,4,100,7]
// Expected Output:
// 100, 2
// where 100 represents the highest number in the array and 2 represents its count of occurrence.


 
// function max(arr){
//     let sorted_arr = arr.sort((a,b)=>b-a);
//     let count=0;
//     for(let i=0; i<sorted_arr.length;i++){
//         if(sorted_arr[i]===sorted_arr[0]){
//             count++;
//         }
//     }
//     console.log(sorted_arr[0],count);
    
// }

// const arr=[1,10,4,10,100,-5,4,100,7];
// max(arr);




// Create a Javascript function to check if the given string is palindrome or not.
// Palindrome is a string which when saw from opposite side, is same to the original one.
// Examples of palindrome strings:
// "aba", "abcdcba", "abcddcba"
// Expected Output should be a boolean (true or false).


// function palindrome(str){
// let arr=[...str];
// let temp_arr=[...arr];
// let reverse_arr= arr.reverse();
// return temp_arr===reverse_arr?true:false;
// }





// function palindrome(str){
//     let start=0;
//     let end=str.length-1;
//     while(start < end)
//         {
//             if(str.charAt(left) != str.charAt(right))
//             {
//                 return false;
//             }
//             left++;
//             right--;
//         }
//         return true;
// }
// let str="aba";
// console.log(palindrome(str));


 
// Create a javascript function taking a string as an input and giving the character having maximum occurrence and its occurrence count as output.
//  Treat capital and small-case characters as different entities.
//  Example
//   Input: abc def ab AADsda
//  Output: a, 3
//  Example:
//  Input: abc def ab AADsdA
//  Output: A, 3

function count(str){
    let arr=[...str];
    console.log(arr);
    let maxOccuringChar="";
    let count=0;
    console.log(arr.find());
for(let i=0;i<arr.length;i++){
    arr.find(arr[i]);
    if(arr.search(arr[i])){
        count=1;
    }
    else {
        count++;
    }
    return [maxOccuringChar,count];
}
}
console.log(count("abc def ab AADsda"));

// solution :

function maxCharacter(str){
    const charMap = {};
    let max = 0, maxChar = "";
  
    for(let char of str){
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    for(let char in charMap){
      if(charMap[char] > max){
        max = charMap[char];
        maxChar = char;
      }
    }
    console.log(charMap);
    return [maxChar,charMap[maxChar]];
  }
  console.log(maxCharacter("abc def ab AADsda"));


// Create a javascript function taking an array of numbers as input.
//  The array can be nested with another array of numbers. The array can be nested to any level
// e.g [1,3,[2,5,7],4,[6, 7],[9,10,8], [5, 7, 2, 20, [9,10,8], 8, 8, 2, 11, 4]]
// The function should return a sorted array of numbers without any nesting, 
// and there shouldn’t be any duplicate element present in that array.
// 
// Example:
// Input: [1,2,3,6,[3,4,[5,6]], [6, 10]]
// Output: [10,6,5,4,3,2,1]

let flatArr=[];
function flat(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] instanceof Array){
           flat(arr[i]);
        }
        else{
            flatArr.push(arr[i]);
        }   
       }
       return flatArr;
}
function removeDuplicates(arr){
    let temp=[];
    let j=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i] != arr[i+1])
            temp[j++] = arr[i];
    }
    return temp;
}
function mysort(arr){
    let arrayToBeSorted=flat(arr);
    for(let i=0; i<arrayToBeSorted.length;i++){
        for(let j=0;j<arrayToBeSorted.length;j++){
            if(arrayToBeSorted[j]>arrayToBeSorted[i]){
                let temp=arrayToBeSorted[j];
                arrayToBeSorted[j]=arrayToBeSorted[i];
                arrayToBeSorted[i]=temp;
            }
        }
    }
    console.log(arrayToBeSorted);
    //now removing duplicates 
            //time is up
            //continue: 
    let sortedArr = removeDuplicates(arrayToBeSorted);
return sortedArr;
}
let arr=[1,2,3,6,[3,4,[5,6]], [6, 10]];
console.log(mysort(arr));
