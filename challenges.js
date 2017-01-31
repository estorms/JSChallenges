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
console.log(scoresRoundedArray);

var noDupesArr = [];

function removeDupes(arr) {
for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            noDupesArr.push(arr[i]);
        }
    }
}
}


