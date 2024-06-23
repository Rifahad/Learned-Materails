let fruits = ['apple','mango', 'grape','orange']

//push

fruits.push('guava')
console.log(fruits);

//pop

fruits.pop('guava')
console.log(fruits);

//unshift

fruits.unshift('guava')
console.log(fruits);

//shift

fruits.shift('guava')
console.log(fruits);


//slice: used to cut a save as new 

let f1=fruits.slice(1,3)
console.log(f1);



//index of
let f2=fruits.indexOf('mango')
console.log(f2);


//to start from end

console.log(fruits[fruits.length-1]);

// short way to start from end

console.log(fruits.at(-1));



//true / false

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now



//for of

for (let fruit of fruits) {
    console.log( fruit);
  }


//for in


for(const fruitss in fruits) {
    console.log(fruitss);
    console.log(fruits[fruitss]);
  }


//length use to trungate array length

fruits.length=3;
console.log(fruits)


//another way to create array

let b=new Array(1,2,3,4,5,6,7,8,9)
console.log(b);

// new way helps to create array without passing value
//if array have single value it's referred as its length 

let c=new Array(2);



//to string

console.log(String(fruits));



// true or false when using == /===

console.log( [] == [] ); // false
console.log( [0] == [0] ); // false


console.log( 0 == [] ); // true
console.log('0' == [] ); // false




// for of use in array
for (let item of fruits){
  console.log(item);
}

//for (let i in arr) – never use.

for (let item in fruits){
  console.log(item);
}

//isFinite used to check what is user gived a number or not
// if the user not entered a number it shows false

let number1 = 42;
let number2 = Infinity;
let number3 = -Infinity;
let notANumber = NaN;

console.log(isFinite(number1));  // true
console.log(isFinite(number2));  // false
console.log(isFinite(number3));  // false
console.log(isFinite(notANumber));  // false

//array concat

let cars=['benz','audi']

console.log(cars.concat(['bugatti','range rover']));

//we can concate an object too to a array


let obj={
  Age:30,
  address:'parambil peedika'
}

console.log(cars.concat(obj));


//for each in array

cars.forEach(function (item,index,Arrays) {
  console.log(item,index,Arrays);
})





