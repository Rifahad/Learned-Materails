//************************************* */
//declare two array
//delete 0
//merge two array
//sort array

// let a=[1,2,3,0,4,6,7,0,8,9,0]
// let b=[2,5,6]
// let n=a.concat(b
// for (let i = 0; i < n.length; i++) {
//     if (n[i] === 0) {
//         for (let j = i; j<n.length; j++) {
//            n[j]=n[j+1]
            
//         }
//         n.length--
//         i--
//     }
// }
// console.log(n);



// let a=[1,2,3,4,5]



// ***************************************************************************************************************************
// Merge Arrays:   Write a function that takes two arrays as input and returns a new array that is a combination of both arrays



// let arr1=[1,2,3,4]
// let arr2=[2,3,4,5]

// function merge(a,b) {
    // c=[]
    // j=0;
    // for (let i = 0; i < a.length; i++) {
    //     c[j]=a[i]
    //     j++
    // }
    // for (let i = 0; i < b.length; i++) {
    //     c[j]=b[i]
    //     j++
    // }
    // console.log(c)

// }
//******************************************************************************************************* */
// merge(arr1,arr2);
// let j=0
// for (let k = 0; k < array.length; k++) {
//     arr1[j]=arr2[k]
//     j++;
// }

// console.log(arr1)



//****************************************************************************************************** */

//Odd Index Values:   Write a function that takes an array of numbers as input and returns a new array containing only the values at odd indices

// a=[1,2,3,4,42,13,3,4,1,-3]
// for (let i = 0; i < a.length; i++) {
//     if(a[i]%2!=0){
//         console.log(a[i])
//     }
// }




// **************************************************************************************************************************************************************
// Array Average:  Write a function that takes an array of numbers as input and returns the average of all the numbers.

// let ar=[1,2,3,4,5,6,5],
//     sum=0;
// for (let i = 0; i < ar.length; i++) {
//     sum+=ar[i]  
//     // console.log(sum)
// }

// let avg=sum/ar.length
// document.write(avg)








// **************************************************************************************************************************************************************

// Remove Negatives:  Write a function that takes an array of numbers as input and returns a new array with all negative numbers removed.

// let array=[-1,3,-5,14,0]

// for (let i = 0; i < array.length; i++) {
//     if (array[i]>=0) {
//         console.log(array[i])
//     }
    
// }




// **************************************************************************************************************************************************************


// Check for Palindrome: Write a function that takes a string as input and returns true if it is a palindrome, and false otherwise.


// let a='abca',
// rev=''
// for (let i = 0; i < a.length; i++) {
//     rev+=a[a.length-i-1]
// }
//     if(a==rev){
//         console.log('number is palindrome');
//     }else{
//         console.log('not palindrome');
//     }











// **************************************************************************************************************************************************************
//check mark of a student

// let user=parseInt(prompt('Ennter mark of a student'))

// if(user>90 && user<=100){
//     document.write('S')
// }
// else if(user>80 && user<=90){
//     document.write("A")
// }

// else if(user>70 && user<=80){
//     document.write("B")
// }
// else if(user>60 && user<=70){
//     document.write("C")
// }
// else if(user>45 && user<=60){
//     document.write("D")
// }
// else if(user>0 && user<=44){
//     document.write("FAILED")
// }
// else{
//     document.write("Please enter a valid number")
// }



//***************************************************************************************************************************** */


// function mark(){
// let user=parseInt(prompt('Enter mark of a student'))
// if(user>90 && user<=100){
//     alert('S')
// }
// else if(user>80 && user<=90){
//     alert("A")
// }
// else if(user>70 && user<=80){
//     alert("B")
// }
// else if(user>60 && user<=70){
//     alert("C")
// }
// else if(user>45 && user<=60){
//     alert("D")
// }
// else if(user>0 && user<=44){
//     alert("FAILED")
// }
// else{
//     alert("Please enter a valid number")
// }
// }



//***************************************************************************************************************************** */


// Capitalize Words:   Write a function that takes an array of words as input and returns a new array where each word is capitalized.


// let a=['ansk','sss','dhskhs']
// let b=[]
// let j=0;
// for (let i = 0; i < a.length; i++) {
//     b[j]=a[i].toUpperCase()
//     j++
// }   
// console.log(b);


//***************************************************************************************************************************** */


// Sort Array: Write a function that takes an array of numbers as input and returns a new array with the elements sorted in ascending order.

// let a=[1,4,3,2,6,7,3],
// temp=0;

// for (let i = 0; i < a.length; i++) {
    
//     for (let j = i+1; j < a.length; j++) {
//         if(a[i]>=a[j]){
//             temp=a[j]
//             a[j]=a[i]
//             a[i]=temp
            
//         }
        
//     }
    
// }

// console.log(a)




//********************************************************************************************************************************************/

// Remove Zero:  Write a function that takes an array of numbers as input and returns a new array with all zero removed.

// let a=[1,4,3,0,6,0,3]
// n=[]
// j=0
// for (let i = 0; i < a.length; i++) 
//     {
//         if(a[i]!=0){
//         n[j]=a[i]
//         j++
//         }
//     }
//     console.log(n);


//*********************************************************************************************************************************************** */

// Find Missing Number: Write a function that takes an array of consecutive numbers (with one number missing) as input and returns the missing number.

// let a=[1,2,3,4,6,7,8,9]

// for (let i = 0; i < a.length; i++) {
//     for (let j = i+1; j < a.length; j++) {
//         if(a[i]+1 == a[j]){
//             console.log(a);
//         }

//     }
// }

//****************************************************************************** */

// let a=prompt('enter phone number')
// let b=a.split('')

// for (let i = 0; i < a.length; i++) {
//     let sum=1;
//     for (let j = 1; j <=a[i]; j++) {
//         sum=sum*j
//     }
//     document.write(`${a[i]} and factorial = ${sum}`);
// }


//************************************************************************* */


// copies all properties from permissions1 and permissions2 into user

// Object.assign(user, permissions1, permissions2);




//************************************************************************* */


// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (success) {
//       resolve("Operation successful");
//     } else {
//       reject("Operation failed");
//     }
//   });
  
//   myPromise.then(result => console.log(result)).catch(error => console.error(error));
  

// console.log('start');
//  new Promise((resolve, reject) => {
//     setTimeout(() => {
       
//         console.log('hai no errors');
//         if(true){
//             resolve(users = [])
//         }   
//     }, 1000);

// }).then(()=>{
//     console.log('we ihjsdbkmd');
// }).catch(()=>{
//     console.log("error")
// })
// console.log('kooi');




// function divide(a, b) {
//     try {
//       // Attempting to perform the division
//       if (b === 0) {
//         throw new Error("Division by zero is not allowed");
//       }
//       const result = a / b;
//       return result;
//     } catch (error) {
//       // Handling the exception
//       console.error("Error:", error.message);
//       return undefined; // or any other value indicating failure
//     }
//   }
//   // Example usage:
//   const result1 = divide();
//   console.log("Result 1:", result1); // Output: Result 1: 5
  
//   const result2 = divide(8, 0);
//   console.log("Result 2:", result2); // Output: Error: Division by zero is not allowed, Result 2: undefined
  

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//   console.log(number);
// });


// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(evens);


// let a=[1,2,4,5,6,67]

// while (a != 5) {
//     console.log(a);
// }

// const numbers = [1, 2, 3, 4, 5];
// let index = 4;
// while (index < numbers.length) {
//   console.log(numbers[index]);
//   index++;
// }


//************************************************************************************************************************************************ */


// let kk=[2,1,2,3,4,4,6,5,8]

// for (let j = 0; j < kk.length; j++) {
//   if (kk[j]%2==0) {
//     console.log(kk[j-1]+kk[j+1])
//   }
// }

//*********************************************************************************** */

// function createMultiplier(multipli) {
//     console.log(multipli);
//     return function (number){ 
//      console.log(number)
//       return number * multipli;
//     };
//   }
// const double = createMultiplier(2);
// console.log(double(10));




// let a=[1,2,5,6,25]
// let b=a[0]
// let n=a[a.length-1]
// for (let i=0;i<n; i++){
//     a[i]=b
//     b++;
// }
// console.log(a);


// let a=[14,3,22,51,5,40,60]
// let largest=a[0];
// let seclargest=0;
// let big=0;

// for (let i = 1; i < a.length; i++) {
//     if (a[i]>largest) {
//         big=a[i]
//     }
// }

// for (let i = 1; i < a.length; i++) {
//     if (a[i]<big &&  a[i]>largest) {
//         seclargest=a[i]
//     }
// }
// console.log(big);
// console.log(seclargest);



// callback hell

// function add(a,b,callback) {
//     let sum=a+b;
//     callback(sum)
// }

// function mul(a,b,callback1) {
//     let sum1=a*b;
//     callback1(sum1)
// }

// function div(a,b,callback2) {
//     let sum2=a/b;
//     callback2(sum2)
// }


// add(10,2,(sum) =>{
//     mul(sum,2,(sum1)=>{
//         div(sum1,3,(sum2)=>{
//             console.log(sum2);
//         })
//     })
// })



// for each

// let a={
//     name:'rt max',
//     id:1,
//     pick:'rtX'
// }


// b=[1,2,3,4,5]
// a=[];

// b.forEach((Number) => {
//     // console.log(Number);
//     if(Number % 2 ==0){
//         a.push(Number)
//     }
// });

// console.log(a);

