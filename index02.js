// 2. Write a program in C to find the sum of all elements of the array.
// Test Data :
// Input the number of elements to be stored in the array :3
// Input 3 elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 8
// Expected Output :
// Sum of all elements stored in the array is : 1

function arraySum(users_input){
    let arr = users_input.split(' ');
    let sum = 0;
    for(i=0;i<arr.length;i++){
        num = Number(arr[i]);
        sum = sum + num;
    }
    return sum;
}

// Driver Code
console.log('start')
let users_input = prompt('Enter the array elements seprated by space');
sumOfArray = arraySum(users_input);
console.log(`Sum of elements of Provided array is : ${sumOfArray}`)