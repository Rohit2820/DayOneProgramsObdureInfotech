
// 5. Write a program in C to sort elements of array in ascending order. 
// Test Data :
// Input the size of array : 5
// Input 5 elements in the array :
// element - 0 : 2
// element - 1 : 7
// element - 2 : 4
// element - 3 : 5
// element - 4 : 9
// Expected Output :
// Elements of array in sorted ascending order:
// 2 4 5 7 9

function partition(arr,low,high)
{   

    let i = low - 1;
    let pivot = arr[high]
    for(let j = low;j<=high-1;j++)
    {
        if(arr[j]<pivot)
        {
            i++;
           [arr[i],arr[j]]=[arr[j],arr[i]];
        }
        
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];  
    return i+1;
}
function sort(arr,low,high)
{
  if(low<high)
  {
    let pi = partition(arr,low,high);
    sort(arr,low,pi-1);
    sort(arr,pi+1,high)
  }
}
let array = [3,2,4,56,6]
sort(array,0,array.length-1)
console.log(array.join(" "));
