// JavaScript program to insert a given element at the beginning 
// of an array
//Using Built in Method
let arr = [10, 20, 30, 40];
let element = 50;
console.log("Array before insertion");
console.log(arr.join(" "));

// Insert element at the beginning
arr.unshift(element);

console.log("Array after insertion");
console.log(arr.join(" "));

//Using Custom Method
// JavaScript program to insert given element at the beginning 
// of an array

let arr1 = [10, 20, 30, 40, 0];
let n = 4;
let element1 = 50;

console.log("Array before insertion");
console.log(arr1.slice(0, n).join(" ")); //(start,end) end not included

//10 20 30 40

// Shift all elements to the right
for (let i = n - 1; i >= 0; i--) {
	arr1[i + 1] = arr1[i];
}

//[10,10,20,30,40]

// Insert new element at the beginning
arr1[0] = element1;

//[50,10,20,30,40]
console.log("Array after insertion");
console.log(arr1.join(" "));

//50,10,20,30,40

// JavaScript program to insert given element at a given position
// in an array using in-built methods
​
let arr2 = [10, 20, 30, 40];
let ele = 50;
let pos = 2;
console.log("Array before insertion");
console.log(arr2);
​
// Insert element at the given position
arr2.splice(pos - 1, 0, ele); //(startindex, delete 0 items, add this/replace with this)
​
console.log("Array after insertion");
console.log(arr2);


// JavaScript program to insert given element at a given 
// position in an array using custom method

let l = 4;
let arr3 = [10, 20, 30, 40, 0];
let ele3 = 50;
let pos3 = 2;
console.log("Array before insertion");
console.log(arr3);

// Shifting elements to the right
for (let i = l; i >= pos3; i--)
    arr3[i] = arr3[i - 1];

// Insert the new element at index pos - 1
arr3[pos3 - 1] = ele3;

console.log("\nArray after insertion");
console.log(arr3);

// JavaScript program to insert a given element at the end 
// of an array using built-in methods

let arr4 = [10, 20, 30, 40];
let ele4 = 50;
console.log("Array before insertion");
console.log(arr4.join(" "));

// Insert element at the end
arr4.push(ele4);

console.log("Array after insertion");
console.log(arr4.join(" "));

// JavaScript program to insert given element at the end
// of an array using custom methods

let n5 = 4;
let arr5 = [10, 20, 30, 40, 0];
let ele5 = 50;

console.log("Array before insertion");
console.log(arr5.slice(0, n5).join(" "));

// Inserting element at the end of the array
arr5[n] = ele5;

console.log("Array after insertion");
console.log(arr5.join(" "));