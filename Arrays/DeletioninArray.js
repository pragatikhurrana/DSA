// JavaScript program to delete an element
// from the beginning of an array 

let arr = [10, 20, 30, 40];

console.log("Array before deletion");
console.log(arr);

// Remove the first element
arr.shift();

console.log("Array after deletion");
console.log(arr);

// JavaScript program to delete an element from the
// beginning of an array using custom method

let n = arr.length;

console.log("Array before deletion");
for(let i = 0; i < n; i++)
	console.log(arr[i]);

// Shift all the elements 1 position to the left
// starting from second element
for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
}

// Reduce the array size by 1
n--;

console.log("Array after deletion");
for(let i = 0; i < n; i++)
	console.log(arr[i]);

// JavaScript program to delete an element from a given  
// position of an array

let pos = 2;
​
console.log("Array before deletion");
console.log(arr)
​
// Delete the element at the specified position
arr.splice(pos - 1, 1); //start index, delete 1 item
​
console.log("Array after deletion");
console.log(arr);

// JavaScript program to delete an element from a given
// position in an array using custom method



console.log("Array before deletion");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}

// Delete the element at the given position
for (let i = pos; i < n; i++) {
    arr[i - 1] = arr[i];
}

if (pos <= n) {
    n--;
}

console.log("\nArray after deletion");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}

// JavaScript program to delete the first occurrence of 
// an element in the array using built-in methods


let ele = 20;

console.log("Array before deletion");
console.log(arr)

// Find the element in the array
let idx = arr.indexOf(ele);

// Remove the element if it is present in array
if (idx !== -1) {
    arr.splice(idx, 1);
}

console.log("Array after deletion");
console.log(arr)

// JavaScript program to delete the first occurrence of an
// element in the array using custom method


console.log("Array before deletion");
for(let i = 0; i < n; i++)
	console.log(arr[i]);

let found = false;
for (let i = 0; i < n; i++) {

    // If the element has been found previously,
    // shift the current element to the left
    if (found) {
        arr[i - 1] = arr[i];
    }

    // check if the current element is equal to
    // the element to be removed
    else if (arr[i] === ele) {
        found = true;
    }
}

// If element was found, reduce the size of array
if (found === true) {
    n--;
}

console.log("\nArray after deletion");
for (let i = 0; i < n; i++) {
   console.log(arr[i] + " ");
}


///Remove All Occurrences of an Element in an Array

function removeElement(arr, ele) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!== ele) {
            [arr[k], arr[i]] = [arr[i], arr[k]];
            k += 1;
        }
    }
    return k;
}

function main() {
    let arr = [0, 1, 3, 0, 2, 2, 4, 2];
    let ele = 2;
    console.log(removeElement(arr, ele));
}

main();

// JavaScript program to delete an element from the end 
// of an array using in-built methods

console.log("Array before deletion");
console.log(arr);

// Remove the last element from the array
arr.pop();

console.log("Array after deletion");
console.log(arr);

// JavaScript program to delete an element from the end
// of an array using custom methods


console.log("Array before deletion");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}

// Reduce the array size by 1
n--;

console.log("\nArray after deletion");
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}