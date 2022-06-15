let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array.
// (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  let sortedArray = arr.sort((a,b)=>a.length - b.length);
  return sortedArray[sortedArray.length-1];
}
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
function lengthOfWords(arr){
  let wordLength = arr.map(ele => ele.length);
  return wordLength;
}
lengthOfWords(words);

// - Create a new array that only contains word with atleast one vowel.
function arrayVowel(arr){
  let vowels = ["a", "e", "i", "o", "u"];
  for(let i=0; i<vowels.length; i++) {
    return arr.filter(ele => ele.includes(vowels[i]));
  }
}
arrayVowel(words);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
let ele=words.filter((start)=>{
if (start.startsWith('a')||
    start.startsWith('e')||
    start.startsWith('i')||
    start.startsWith('o')||
    start.startsWith('u')){
      return true;      
    }
    else
      return false;
});
// - Create a new array that contianse words not ending with vowel

let EndingVowel = words.filter((vowel) => {
  if (
      vowel.toLowerCase().lastIndexOf("a", words.length -1)||
      vowel.toLowerCase().lastIndexOf("e", words.length -1)||
      vowel.toLowerCase().lastIndexOf("i", words.length -1)||
      vowel.toLowerCase().lastIndexOf("o", words.length -1)||
      vowel.toLowerCase().lastIndexOf("u", words.length -1)
     ){
        return true
       }
  else{
        return false
      }
}
);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipleOfThree = numbers.filter((num) =>  {
  if ( num % 3 === 0 ){
    return num 
  } 
  else {
    return false
  }
})
// - Create a new array that contains only even numbers
let evenNumbers = numbers.filter((num) => {
  if ( num % 2 === 0 ){
    return true 
  } 
  else {
    return false
  }
})
// - Create  a new array that contains only odd numbers.
let oddNumbers = numbers.filter((num) => {
  if ( num % 2 !== 0 ){
    return true 
  } 
  else {
    return false
  }
})

// - Create a new array that should have true for even number and false for odd numbers.
let isEvenTrueOddFalse = numbers.map((num) => {
  if ( num % 2 === 0 ){
    return true
  }
  else {
    return false
  }
} )

// - Sort the above number in assending order.
numbers.sort((a,b)=> a - b );

// - Does sort mutate the original array?
//yes it dose!

// - Find the sum of the numbers in the array.
let sumOfNumber = numbers.reduce((acc,num) => acc + num ,0);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array){
  let sum = 0;
  let avg;
  for ( let  i = 0  ; i < array.length ; i++ ){
    sum = sum + array[i];
    avg = sum / array.length
  }
  return avg
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array){
  let sum = 0;
  let avg
  for (let i = 0 ; i < array.length ; i++ ){
    sum = sum + array[i].length ;
  }
  avg = sum / array.length;
  return avg
}