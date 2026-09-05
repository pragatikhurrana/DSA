//most common methods of traversal include 
//iterating through the array using loops like for, while, or foreach.

//Linear traversal is the process of visiting each element of an array sequentially, 
// starting from the first element and moving to the last element. 
// During this traversal, each element is processed (printed, modified, or checked) 
// one after the other, in the order they are stored in the array. 
// This is the most common and straightforward way of accessing the elements of an array.

const arr= [1,2,3,4];

arr.forEach((i)=>{console.log(i)});

for(let i=0; i<= arr.length -1 ;i++){
    console.log(arr[i]);
}

//Time Complexity: O(n)
//Auxiliary Space: O(1)

//Reverse traversal is the process of visiting each element of an array 
// starting from the last element and moving towards the first element. 
// This method is useful when you need to process the elements of an array in reverse order.
//  In this type of traversal, you begin from the last index (the rightmost element)
//  and work your way to the first index (the leftmost element).

for(let i=arr.length-1; i>=0;i--){
    console.log(arr[i]);
}
//Time Complexity: O(n)
//Auxiliary Space: O(1)

//Methods of Traversal

//Using For Loop
for(let i=0; i<= arr.length -1 ;i++){
    console.log(arr[i]);
}

//Using While Loop
while(i<arr.length){
    console.log(arr[i]);
    i++;
}
//Using forEach
arr.forEach((i)=>{console.log(i)});

//searching an element in an array
let target =1
for(let i=0; i<= arr.length -1 ;i++){
    if(arr[i]== target){
        console.log(i + ' is the index');
    }
}

//Modifying each element by 5
for(let i=0; i<= arr.length -1 ;i++){
    arr[i]= arr[i]+5;
    console.log(arr);
}