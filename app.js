let number = [10,20,30];
const arryNumber = (arr) => {
    let a = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i])
    }
    return a;
}
console.log(arryNumber(number));
console.log(arryNumber([20,30,50]));
let startString = 'Hello world';
function reverseString(input) {
     let result = '';
     for(let i = input.length - 1; i >= 0; i--) {
         result = result + input[i];
     }
     return result;
 }
 console.log(reverseString(startString));
 console.log(reverseString('abc'));

