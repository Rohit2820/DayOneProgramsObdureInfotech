// 1. Write a program in C to read n number of values in an array and display it in reverse order. 
// Test Data :
// Input the number of elements to store in the array :3
// Input 3 number of elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7
// Expected Output :
// The values store into the array are :
// 2 5 7
// The values store into the array in reverse are :
// 7 5 2

function reverseArrayElements(user_input){
    let arr = user_input.split(' ')
    let new_arr = [];
    for(i=arr.length-1;i>=0;i--){
        new_arr.push(arr[i]);
    }
    return new_arr;
}

//  Driver Code
let user_input = prompt('Enter the array elements by giving space');
reverseArray = reverseArrayElements(user_input)
console.log(`Reversed Array is : ${reverseArray}`);
