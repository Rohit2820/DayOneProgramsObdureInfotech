
// 4. Write a program in C to find the maximum and minimum element in an array. 
// Test Data :
// Input the number of elements to be stored in the array :3
// Input 3 elements in the array :
// element - 0 : 45
// element - 1 : 25
// element - 2 : 21
// Expected Output :
// Maximum element is : 45
// Minimum element is : 21


function maxAndmin(arr)
{   
    let new_arr = []
    let max=0;
    let min=100000;
    for(let i=0;i<arr.length;i++)
    {
        if(max<arr[i])
        {
            max=arr[i]
        }
        if(min>arr[i])
        {
            min = arr[i]
        }
    }
    new_arr.push(max)
    new_arr.push(min)
    return new_arr;
}

let output = maxAndmin([2,3,4,2,323])
console.log(`Maximum value in array is : ${output[0]}`)
console.log(`Minimum value in array is : ${output[1]}`)
















