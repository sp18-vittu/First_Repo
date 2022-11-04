function findMaxConsCount(str) {
    let capsStr = str.toUpperCase();
    for (let i = 0; i < capsStr.length; i++) {
        let x = capsStr[i];
        let isCharVowel = (x == "A" ||
            x == "E" ||
            x == "I" ||
            x == "O" ||
            x == "U") ? true : false;
        if (isCharVowel === true) {
            let nextConsonant = nextLetter(capsStr[i]);
            capsStr = capsStr.replaceAt(i, nextConsonant);

        }
        // if (isVowel(capsStr[i]) === true) {
        //     let nextConsonant = nextLetter(capsStr[i]);
        //     capsStr=capsStr.replaceAt(i,nextConsonant);

        // }
    }
    console.log(capsStr);
    let finalobj = countCharacters(capsStr);
    let maxChar = findMax(finalobj);
    // console.log();

}
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};

function isVowel(x) {

    let result;

    if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}
function nextLetter(s) {
    return s.replace(/([ A-Z])[^a-zA-Z]*$/, function (a) {
        var c = a.charCodeAt(0);
        // switch (c) {
        //     // case 90: return 'A';
        //     // case 122: return 'a';
        //     default: return String.fromCharCode(++c);
        // }
        return String.fromCharCode(++c);
    });
}
// console.log(nextLetter("i"));

function countCharacters(string) {
    var newArray = string.split("");
    // console.log(newArray);
    var countObj = {};
    for (let i = 0; i < newArray.length; i++) {
        let count = 1;

        for (let j = i + 1; j < newArray.length; j++) {

            if (newArray[j] === newArray[i]) {
                count++;
                newArray.splice(j, 1);  //used to delete that element
                // continue;
            } else {
                continue;
            }
        }
        // console.log(newArray[i]);
        countObj[newArray[i]] = count;
        // console.log(`${string[i]} occur ${count} times`);
    }
    // console.log(newArray);
    // console.log(countObj);
    return countObj;
};
function findMax(obj) {
    let keysArr = [];
    let valuesArr = [];
    for (key in obj) {
        keysArr.push(key);
        valuesArr.push(obj[key]);
    }
    let maxcount = 1;
    let counter = 0;
    
    for (let i = 0; i < valuesArr.length; i++) {
        if (valuesArr[i] > maxcount) {
            maxcount = valuesArr[i];
            counter = i;
        }
        
    }
    
    // console.log(maxcount,counter);
    // console.log(keysArr);
    // console.log(valuesArr);
    // return keysArr[counter];
    console.log(`${keysArr[counter]} occured maximum times with count=${maxcount}`);
}





findMaxConsCount("VAaittjhgdtfvbljysrrtuoiuyucyu");