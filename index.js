var arr = [ 2, 3, 4, 5, 6, 7, 8, 9];
var stringArr= ["rahul","mokshita","nisha","tannu","kapil","mokshita","rahar"];
(function () {
    for (let i in arr) {
        console.log("printing odd numbers in an array")
        if (arr[i] % 2 != 0) {
            console.log(i,);
        }
    }
})(); // printing odd numbers in an array

(function () {
    console.log("Converting all the strings to title caps in a string array")
    for (let i of stringArr) {
        console.log(i.toUpperCase());
    }
})(); // Converting all the strings to title caps in a string array


(function () {
    console.log("Sum of all numbers in an array")
    console.log(arr.reduce((acc,i)=>i+acc,0));
})(); // Sum of all numbers in an array


(function () {
    console.log("Return all the prime numbers in an array")
   var primeArr= arr.filter(num=> {
        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      });
    console.log(primeArr);
})();  // Return all the prime numbers in an array


(function () {
    console.log("Return all the palindromes in an array")
    var pallindromeArr= stringArr.filter(i=> {
            let a = i.split('').reverse().join('');
            if(a===i){
                return true
            }
         return false;
       });
     console.log(pallindromeArr);
 })();  // Return all the palindromes in an array


 (function () {
    console.log("Remove duplicates from an array")

   var result=[];
   stringArr.filter(i=>{
       if(result.indexOf(i)==-1){
        result.push(i)
       }
   })
   console.log(result);
 })(); // Remove duplicates from an array


(function () {
    console.log("Rotate an array by k times")
   var result=[];
   function rotateArrayOnce(arr){
    let result =[];
    for(let i=1;i<arr.length;i++){
        result.push(arr[i]);
    }
    result.push(arr[0]);
    return result;
   }
   function rotateArrayNTimes(arr,n){
        let temp=[];   
    for(let i=0;i<n+1;i++){
        if(i===0) temp =[...rotateArrayOnce(arr)]   
        else temp = [...rotateArrayOnce(temp)];
       }
    return temp;
   }
   console.log(rotateArrayNTimes(arr,4));
 })(); // Rotate an array by k times


// Arrow Functions

var printOdd = ()=> {
    console.log("printing odd numbers in an array")
    for (let i in arr) {
        if (arr[i] % 2 != 0) {
            console.log(i);
        }
    }
}// printing odd numbers in an array

var printUpperCase=()=> {
    console.log("Converting all the strings to title caps in a string array")
    for (let i of stringArr) {
        console.log(i.toUpperCase());
    }
}// Converting all the strings to title caps in a string array

var sumTheArray= ()=>{
    console.log("Sum of all numbers in an array")
    console.log(arr.reduce((acc,i)=>i+acc,0));
} // Sum of all numbers in an array

var primeNos= ()=> {
    console.log("Return all the prime numbers in an array")
    var primeArr= arr.filter(num=> {
         for (var i = 2; i <= Math.sqrt(num); i++) {
           if (num % i === 0) return false;
         }
         return true;
       });
     console.log(primeArr);
 } // Return all the prime numbers in an array


var printPallindrome = ()=>{
    console.log("Return all the palindromes in an array")
    var pallindromeArr= stringArr.filter(i=> {
            let a = i.split('').reverse().join('');
            if(a===i){
                return true
            }
         return false;
       });
     console.log(pallindromeArr);
 }  // Return all the palindromes in an array


printOdd()
printPallindrome()
printUpperCase()
sumTheArray()
primeNos();

