//array of integers nums- [1,2,3,5]
//integer target- 8

//return indexes so that they return target

//Brute force
function findIndex(nums, target){
    for(let i=0; i< nums.length; i++){
        for(let j=i+1;j<nums.length;j++){
             if(nums[i] + nums[j] == target){
                    console.log([i,j])
                    return [i,j];
            }
        }
    }
}

//Optimised
function findIndexes(nums, target){
    for(let i=0; i<nums.length-1;i++){
        let j = nums.length -1;
        while(j>=0){
            if(nums[i]+ nums[j] == target && i!==j){
                console.log([i,j]);
                return [i,j];
            } else{
                j--;
            }
        }
    }
}

console.log(findIndex([1,2,3,5], 8));
console.log(findIndexes([1,2,3,5], 8));