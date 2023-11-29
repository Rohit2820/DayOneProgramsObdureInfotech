// <!-- 6. Write a program in C to insert New value in the array (sorted list ).
// Test Data :
// Insert New value in the sorted array :
// -----------------------------------------
// Input the size of array : 5
// Input 5 elements in the array in ascending order:
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7
// element - 3 : 9
// element - 4 : 11
// Input the value to be inserted : 8
// The exist array list is :
// 2 5 7 9 11
// After Insert the list is :
// 2 5 7 8 9 11 -->


function insertInArray(arr,elem,arr_length)
{
    length = arr_length + 1;
    let pos;
    for(i=0;i<arr_length;i++){
        if(arr[i]>elem)
        {
            pos = i;
            break;
        }
    }
    for(let j=pos;j<length;j++)
    {
        arr[pos+1]=arr[pos];
    }
    arr[pos]=elem;
    return arr;
}

// Driver Code
array = [1,2,3,4,5,7]
arr_len = array.length;
elem =6;
console.log(insertInArray(array,elem,arr_len));