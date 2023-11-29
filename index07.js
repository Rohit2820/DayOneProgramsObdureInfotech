// 7. Write a program in C to find the second largest element in an array. Go to the editor
// Test Data :
// Input the size of array : 5
// Input 5 elements in the array :
// element - 0 : 2
// element - 1 : 9
// element - 2 : 1
// element - 3 : 4
// element - 4 : 6
// Expected Output :
// The Second largest element in the array is : 6

function secondLargestElem(arr){
    let max=0;
    let secondMax=0;
    for(let i=0;i<arr.length;i++)
    {
        if(max<arr[i] ){
            secondMax = max;
            max=arr[i];
        }
        if(arr[i]>secondMax && arr[i]<max){
            secondMax=arr[i];
           
        }

    }
    return secondMax;
}

// DriverCode
array = [2,3,1,4,63,43]
secondLargest = secondLargestElem(array);
console.log('SecondLargest Elememt in given array is : ',secondLargest)
