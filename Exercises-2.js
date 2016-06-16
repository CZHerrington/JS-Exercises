// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
  if (x > y) {
return x + " is greater";
} else if (x < y) {
return y + " is greater";
} else {
return "The numbers are equal";
}}


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
  if ((x > y) && (x > z)){
return x + " is greater";
} else if ((y > x) && (y > z)){
return y + " is greater";
} else if ((z > x) && (z > y)){
return z + " is greater";
}}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
   var consonants = [
     "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z",
   ];
   if (consonants.includes(char)) {
   return false;
 } else {
   return true;
 }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){
  var consonants = [
    "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z",
  ];
  var phraseArray = phrase.split("");

}

// String into array:
// var test = "Testing this out"
// test.split("")



// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
  var splitStr = str.split("");
  var reverse = splitStr.reverse();
  var join = reverse.join("");
  return join
}
