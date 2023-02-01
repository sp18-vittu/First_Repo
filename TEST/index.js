// Create a Javascript function taking an array of numbers as parameter and returning the highest number from that array and its count of occurrence.
// Example Input:
// [1,10,4,10,100,-5,4,100,7]
// Expected Output:
// 100, 2
// where 100 represents the highest number in the array and 2 represents its count of occurrence.


 
function max(arr){
    let sorted_arr = arr.sort((a,b)=>b-a);
    let count=0;
    for(let i=0; i<sorted_arr.length;i++){
        if(sorted_arr[i]===sorted_arr[0]){
            count++;
        }
    }
    console.log(sorted_arr[0],count);
    
}

const arr=[1,10,4,10,100,-5,4,100,7];
max(arr);




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





function palindrome(str){
    let start=0;
    let end=str.length-1;
    while(start < end)
        {
            if(str.charAt(left) != str.charAt(right))
            {
                return false;
            }
            left++;
            right--;
        }
        return true;
}
let str="aba";
console.log(palindrome(str));


 


