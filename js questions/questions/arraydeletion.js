// let array=[3,3,5,15,8,5,11,10,12,11,11,44,65,34,44,66,45,74] 
// let deleteCount = 3
// for (let i = 0; i <array.length; i++) {
//     if(array[i] % 5 == 0 ){
//         for (let j = i+1; j <array.length ; j++) {
//                 array[j]=array[j+deleteCount]
//         }
        
//         if(i <= array.length - deleteCount - 1){
//             array.length-=deleteCount
//         }else{
//             let arrayLength = array.length -1
//             for (let j = i; j < arrayLength; j++) {
//                 array.length --
//             }
//         }
//     }
// }
// console.log(array);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////// 0 1 2  3 4 5 6  7  8  9  10 11 12 13 14 15 16 17 
// let array=[3,3,5,15,8,5,11,10,12,15,11,44,64,34,45,64,54,67]//18
// let array=[3,4,5,6,7,8,8,10,34,44,46]
// let array=[2,3,5,4,1]
//0 1 + 1 2
//j 1 2
//length 3       2,4,1

// let deleteCount = 2;
// for (let i = 0; i <array.length; i++) {
//     if(array[i] % 2 == 0 ){
//         let changed = false
//         for (let j = i+1; j <array.length - deleteCount; j++) {
//                 array[j]=array[j+deleteCount]
//                 changed = true
//         }
//         if(changed==true) array.length-=deleteCount
//         else array.length = i + 1 
//     }
// }
// console.log(array);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// arrayValues=[2,3,5,4,1]

// let countToDelete=2;

// for (let i = 0; i < arrayValues.length; i++) {
//     if(arrayValues[i] % 2 ==0){
//         let flag=0;
//         for ( j = i+1; j < arrayValues.length-countToDelete; j++) {
//             arrayValues[j]=arrayValues[j+countToDelete]
//             flag=1;
//         }
//         if (flag==1)arrayValues.length-=countToDelete
//         else arrayValues.length= i + 1
//     }
// }
// console.log(arrayValues);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const results = {}

// function findProduct(a){
//     if(results[a] !== undefined){
//         return results[a]
//     }
//     for (let i = 0; i < 10000000000; i++) {
        
//     }
//     results[a] = a * a
//     return a*a
// }

// console.log(findProduct(10))
// console.log(findProduct(10))
// console.log(findProduct(10))
// console.log(findProduct(20))
// console.log(findProduct(20))






