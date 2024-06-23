// function basith(){
//     console.log("hai baith")
// }

// basith();


// passing

// function basith(a,b){
//     console.log(a+b);
// }

// basith(10,20);


//split'(used to convert string to array)

// var a="rtmax mt";
// let b=a.split('')
// console.log(b)


// immutable( we can resign the value but can't change)

// var a='rtmax'
// a='basith'
// console.log(a)



//
// var a='rtmax'
// b=a
// console.log(b==a)

//object (reference id pass) shallow

// let a={
//     name:'rtmax',
//     age:22
// }
// let b=a
// b.name='basith'
// console.log(a,b)


//deep copy(...spread rest) 1/3

// let a={
//     name:'rtmax',
//     age:22
// }
// let b={...a}
// b.name='basith'
// console.log(a,b)



//deep copy 2/3 object.assign

// let a={
//     name:'rtmax',
//     age:22
// }
// let b=Object.assign({},a)
// b.name='basith'
// console.log(a,b)


//deep copy 3/3 json

// let a={
//     name:'rtmax',
//     age:22
// }
// let b=JSON.parse(JSON.stringify(a))
// b.name='basith'
// console.log(a,b)


//higher order function (a function accept another function or returning a function) & callback function ( passing function is called)

// function higher(fn){ //higher order
//     fn()
// }
// function x(){ // call back
//     console.log('hello')
// }

// higher(x)


// var a=0


// function show(){
//     console.log("cart value is "+a)

// }

// function inccart(){
//     if(a>9){
//         alert("cart is full")
//     }else{
//         a++
//         console.log(a)
//     }
     
// }

// function deccart(){
//     if(a<1){
//         alert("cart is empty")
//     }else{
//         a--
//         console.log(a)
//     }
    
// }

// function clearcart(){
//     a=0
//     console.log(a)
// }

// function plus2(){
//     if(a>9){
//         alert("cart is full")
//     }else{
//         a=a+2
//         console.log(a)
//     }

// }

// function plus3(){
//     if(a>9){
//         alert("cart is full")
//     }else{
//         a=a+3
//         console.log(a)
//     }

// }

// function minus2(){
//     if(a<1){
//         alert("cart is empty")
//     }else{
//         a=a-2
//         console.log(a)
//     }
    
// }


// function minus3(){
//     if(a<1){
//         alert("cart is empty")
//     }else{
//         a=a-3
//         console.log(a)
//     }
    
// }


