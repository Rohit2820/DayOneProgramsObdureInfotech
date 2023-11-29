// 9. Find the first non-repeating element in a given array arr of N integers.
// Note: Array consists of only positive and negative integers and not zero.

// Input : arr[] = {-1, 2, -1, 3, 2}
// Output : 3
// Explanation:
// -1 and 2 are repeating whereas 3 is
// the only number occuring once.
// Hence, the output is 3.

function findNonRepeating(arr)
{
    let new_arr = []
    for(let i =0;i<arr.length;i++){
        var item = arr[i];
        var count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[j]==item)
            {
                count++;
            }
        }
        if(count<=1){
            new_arr.push(item);
        }

    }
    return new_arr;
}

// Driver Code

arr= [3,4,53,32,33,32,3,33,3];
output = findNonRepeating(arr)
console.log('Non repeating elements in array are :',output);