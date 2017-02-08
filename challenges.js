//input a string, return it reversed if word is greater than 5 characters

function spinWords(str){
  strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      var reversedStr = strArr[i].split("").reverse().join("");
      strArr.splice(i, 1, reversedStr);
    }
  }
  var finalStr = strArr.join(" ");
  return finalStr;
}

//WITH TERNARY

function spinWords2(str){
  strArr = str.split(" ");
  for (var i = 0; i < strArr.length; i++) {
    // var elvisLives = Math.PI > 4 ? "Yep" : "Nope";
  var reversedStr = strArr[i].length >= 5 ? strArr[i].split("").reverse().join("") : strArr[i];
      strArr.splice(i, 1, reversedStr);
    }
    var finalStr = strArr.join(" ");
    return finalStr;
}
  
console.log(spinWords("Welcome to the henhouse!"));
console.log(spinWords2("Welcome to the henhouse!"));

//check to see whether the second array contains as a substring any string in the first; if so, push to new array, remove duplicates, sort alphabetically

function inArray(array1, array2){
 var r = [];
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
   if (array2[j].includes(array1[i])) {
    r.push(array1[i]); 
    }
    
    }
  }
  r = r.filter(function(elem, index, arr) {
    return index == arr.indexOf(elem);
})
return r.sort();
}



var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoresRoundedArray = (scores.map(function(num) {
    return (Math.round(num / 10) * 10)
    
}));


var whatIsMap = scores.map(function(elem, index, arr) {
    return {"item": elem, "index": index, "arr": arr};
});
console.log(whatIsMap); 
console.log(scoresRoundedArray);

whatIsMap.forEach(function(m) {
    for (var key in m) {
        console.log(`The key is ${key} and the value is ${m[key]}`)
    }
})

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  var strArr = str.toUpperCase().split("");
    var bool = true;
    strArr.forEach(function(s) {
        if(strArr.indexOf(s) !== strArr.lastIndexOf(s)){
            bool = false;
        }
    })
        return bool;
    }
 

console.log(isIsogram("noon"));

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order

var a = [121, 144, 19, 161, 19, 144, 19, 11] 
var b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

function comp(array1, array2){
var a1OrderSquares = array1.sort(function(a, b) {return a - b}).map(function(elem) {return(elem * elem)});
var a2Order = array2.sort(function(a, b) {return a - b});
return a2Order.toString() == a1OrderSquares.toString();
}

console.log(comp(a, b));


var capitals = function (word) {
word = word.split("").map(function(elem, index) {
   if (elem === elem.toUpperCase()) {
    return index;
   }
 }).filter(function(elem) {return elem!== undefined});
return word;
}
  
  
console.log(capitals("CodEWaRs"));

