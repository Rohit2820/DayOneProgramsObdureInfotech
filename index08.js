// <!-- 8. Write a program in C to sort elements of the array in descending order. Go to the editor
// Test Data :
// Input the size of array : 3
// Input 3 elements in the array :
// element - 0 : 5
// element - 1 : 9
// element - 2 : 1
// Expected Output :
// Elements of the array in sorted descending order:
// 9 5 1 -->



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
  return arr;
}
let array = [3,2,4,56,6]
output = sort(array,0,array.length-1)

let desc_array=[];
for(let i=output.length;i>=0;i--)
{
    desc_array.push(output[i]);

}
console.log('Descending sorted array is :')
console.log(desc_array)