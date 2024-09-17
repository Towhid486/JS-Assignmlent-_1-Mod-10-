/* 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/


// function calculateDifference(a,b){ 
//     let num1=a;
//     let num2=b;
//     let sum=num1-num2
//     console.log(sum);
// }
// calculateDifference(10,4)
// calculateDifference(20,4)
// calculateDifference(26,20)




function calculateDifference(a,b){
    let sum=a-b;
    return a-b;
}
let res=calculateDifference(70,60)
console.log(res)


/* 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.*/

function isOdd(num){

    if(num % 2 !=0){
        return true
    }
    else {
        return false
    }
 
}
console.log(isOdd(5));



/* 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array. */

function findMin(number) {
    const min = Math.min(...number);
    console.log(`Smallest number in array: ${min}`);
}
findMin([33,102,55,-49,66,73,99,-102])




/* 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
 */
function filterEvenNumbers(number) {
    return number.filter(number => number%2===0);
}
let evenNumbers = filterEvenNumbers([1,2,3,4,5,6,7,8,9]);
console.log(`Even number are : ${evenNumbers}`);






/* 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
 */
function sortArrayDescending(sortNumber) {
    return sortNumber.sort((a,b) => b - a);
}
let numbers = [33,2,102,3,55,-49,66,0,1,73,99,-102];
let sortedArray = sortArrayDescending(numbers);
console.log(`Descending order : ${sortedArray}`);




/* 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
 */
    function lowercaseFirstLetter(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
        }
        let data = "HELLO";
        let lowercased = lowercaseFirstLetter(data);
        console.log(lowercased);




/* 7. Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
 */

function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/gi) || []).length;
}
let words = "aeiouAEIOU";
let vowels =countVowels(words);
console.log(vowels);
console.log(words.split('')); 



/* 8. Write a function named findAverage that takes an array of numbers and returns the average of all elements. */

 function findAverage(array) {
     let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
     return sum / array.length;
 }
 let average = findAverage([10,20,30,40,50,]);
 console.log(average)
 






