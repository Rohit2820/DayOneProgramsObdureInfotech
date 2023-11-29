// 3. Write a program in C to count a total number of duplicate elements in an array.
// Test Data :
// Input the number of elements to be stored in the array :3
// Input 3 elements in the array :
// element - 0 : 5
// element - 1 : 1
// element - 2 : 1
// Expected Output :
// Total number of duplicate elements found in the array is : 1
function findDuplicateElements(user_input){
    let iter = 0
    let count = 0;
    let arr = user_input
    let occurence_arr = [];
    let new_arr = [];
    let item = 0;
    for(i=0;i<arr.length;i++){
        item = arr[i]
        count = 0
        for(j=0;j<arr.length;j++){
            if(item ==  arr[j])
            {
                count++;
            }
            else
            { 
                continue
            }

        }
        console.log(item,count)
        occurence_arr.push(count)
    }
    return occurence_arr;
}
        



// Driver Code
let user_input = prompt('Enter array elem by giving space');
let user_input1 = user_input.split(' ');
let result = findDuplicateElements(user_input1);
console.log(`Duplicates elements in array are :`);

for(let i = 0;i<user_input1.length;i++){
    console.log(`${user_input[i]}: ${result[i]}`);
}