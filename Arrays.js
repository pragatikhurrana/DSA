//Arrays
let arr1 = new Array(5); 

let arr2= []

const emptyArray = [];

// Passing multiple arguments creates an array with those elements
const numbers = new Array(10, 20, 30); // [10, 20, 30]

// Passing a single number creates empty slots!
const emptySlots = new Array(3); // [empty × 3], length is 3

//Array.from--- This method creates a new array from an array-like 
// or iterable object (like a Set, Map, a string, or a DOM NodeList). 

// Creating an array from a String
const arrayFromString = Array.from("Hello"); // ['H', 'e', 'l', 'l', 'o']

// Generating an array of a specific size filled with numbers
const generatedArray = Array.from({ length: 3 }, (value, index) => index); // [0, 1, 2]

//Array.of() behaves similarly to the new Array() constructor 
// but eliminates the single-number argument pitfall. 
// It will always create an array containing the arguments you pass, 
// regardless of data type or count.

const singleNumberArray = Array.of(3); // [3] (length is 1, unlike new Array(3))
const mixArray = Array.of(1, "two", true); // [1, "two", true]

//If you need to create an array of a specific size 
//and immediately initialize it with default values, 
// you chain new Array() with the .fill() method

const zeroFilled = new Array(5).fill(0); // [0, 0, 0, 0, 0]

//on basis of size
//fixed
//dynamic

//on basis of dimension
//1-D
//2-D


//fixed size 1-D array 
const filledArr = new Array(5).fill(0); 

const grid = Array.from({ length: rows }, () => new Array(cols).fill(0));

const matrix = [
  [1, 2, 3], // Row 0
  [4, 5, 6], // Row 1
  [7, 8, 9]  // Row 2
];
