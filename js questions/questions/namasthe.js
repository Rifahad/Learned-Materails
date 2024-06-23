    // function ba() {
    //     var a=10;
    //     k();
    //     function k(params) {
    //         console.log(a);
            
    //     }
    // }
    // ba()
    // console.log(a);
    // var a=10;

    // console.log(b);
    // var b=20;








// let a=[1,2,1,3,2,4,2,5,6]

// for (let i = 0; i < a.length; i++) {

//     for (let j = i+1; j < a.length; j++) {
//         if(a[i]==a[j]){
//             a[j]=a[j+1];
//             // a.length--;
//         }
//     }
// }

// for (let k = a.length; k >=0; k--) {
//     console.log(a[k]);
    
// }




// let a=[1,2,1,1,3,2,4,5,6,6]

// for (let i = 0; i < a.length; i++) {
//     for (let j = i+1; j < a.length; j++) {
//         if(a[i]==a[j]){
//             for(k=a[j];k<a.length-1;k++){
//                 a[k]=a[k+1]
//             }
//          a.length--
//          i--
//         }
//     }
// }

// for (let k = a.length-1; k >=0; k--) {
//     console.log(a[k]);    
// }


// if (true) {
//     var i=10
// }

// for (var i = 0; i < 5; i++) { 
//     var b=10;
// }

// console.log(i);


// b()

// function b(params) {
//     let a=10;
//     a=30;
//     console.log(a);
// }
// console.log(a);


// function rt(c) {
//     var a=10
//     console.log(c);
//    return function sinan(d) {
//         console.log(a);
//         console.log(d);
//     }
// }

// let b=rt(20);
// console.log(b);
// b(10);

// rt(10);



// function a(){
//   var b=10
//   function c(){
//     console.log(b);
//     var b=20
//     console.log(b);
//   }
//   c()
// }  
// a();
// let str = "Hello World";
// console.log(str.indexOf("World")); // Output: 6


// function divideNumbers(a, b) {
//     try {
//       if (b === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
  
//       let result = a / b;
//       return result;
//     } catch (error) {
//       console.error("An error occurred:", error.message);
//       return "Error occurred";
//     }
//   }
  
//   // Example usage:
//   let result1 = divideNumbers(10, 2);
//   console.log("Result 1:", result1); // Output: Result 1: 5
  
//   let result2 = divideNumbers(8, 0);
//   console.log("Result 2:", result2); // Output: An error occurred: Division by zero is not allowed. Result 2: Error occurred
  


// *************************************************************************************
//closure constructor



// function Counter() {
//   var count = 0;
//   this.increase=function () {
//     count++;
//     console.log(count);
//   }
//   this.decrease=function(){
//     count--;
//     console.log(count);
//   }
// }

// let counter1=new Counter();

// counter1.increase();
// let b={
//   hai:'hello'
// }





// *************************************************************************************
//promise


// let b= new Promise((resolve,reject) =>{
//   if(1<3) resolve()
//   reject()
// })
// .then(()=>{
//   console.log("hai")
//    return 1
// })
// .then((m)=> {
//     console.log(m);
//     return 2
// })
// .then((x)=>{
//   console.log(x);
// })
// .catch(()=>console.log("bye"))



//**************************************************** */
// async / await



// function yadhu(params) {
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//       if(true )
//       res(console.log('hai yadhu'))
//     else
//       rej(console.log('error'))
//     }, 3000);
//   })
// }


// async function ajay() {
//   console.log('A');
//   console.log('B');
//   console.log('C');
//     await yadhu()
//   console.log('D');
//   console.log('E');
//   }

// ajay()



// a function bundle along with it's parent's lexical environment.

// a=[2,1,34,5,67,4]
// let b=a.map((val,ind,arr)=>{
//     return val % 2 == 0
// })

// // console.log(b);

// let z=a.filter((val,ind,arr)=>{
//     return val % 2 == 0
// })

// a.forEach(element => {
//     return 
// //  console.log(element);   
 
// });






// a=[2,1,34,5,67,4]
// var f=a.reduce((acc,curr,index,arr)=>{
//       if(curr % 2==0){
//         acc.push(curr)
//       }
//       return acc
// },[])

// console.log(f);



// a=[2,1,34,5,67,4]
// var f=a.reduce((acc,curr,index,arr)=>{
//       return acc += curr + index 
// },5)

// console.log(f);


 

// a=[2,1,34,5,67,4,5,55]
// var f=a.find((val,ind,aarr)=>{
//       return val > 35
// })

// console.log(f);





///////////////////////////////////
//shallow copy

let ijaz={
    name:'rt',
    age:21,
    jinshi:{
        wife:'alia',
        age:20,
    }
}

// let b=ijaz;
// b.age=30;
// console.log(b);
// console.log(ijaz);
// let c={...ijaz}
// c.age=10;
// console.log(ijaz,c);

let d={};
Object.assign(d,ijaz)
// d.name='shahba'
d.jinshi.wife='sinan'
console.log(d,ijaz);
// console.log(c);
// console.log(ijaz);
// d.jinshi.age=60;
// console.log(d,ijaz);


/////////////////////////////////////////////////////////////////////////////////////////////////////
//deep copy

// let sinan =JSON.parse(JSON.stringify(ijaz))
// sinan.jinshi.age=100;
// sinan.age=40;
// console.log(sinan,ijaz);
// let shahba=structuredClone(ijaz)
