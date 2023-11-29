let inputField = document.getElementById('inputField');
let inputValue = '';
let arr =[]
inputField.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    inputValue = e.target.value
    // console.log(inputValue)
    arr= inputValue.split('')
    console.log(arr)
})
