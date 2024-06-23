
let arr=[6,5,4,32,1]

function double(x) {
    return x*2;
}

function binary(x) {
    return x.toString(2);
}

let output = arr.map(double);
let bin = arr.map(binary);


let view=arr.map(function triple(x) {
    return x*3;
})
 
// console.log(output);
// console.log(view);
// console.log(bin);


///////////////  in object /////////////////////////////////////

let a=[
    {firstname:"shahaba",lastname:"saleem",age:21},
    {firstname:"rt",lastname:"max",age:27},
    {firstname:"sinan",lastname:"pottan",age:21},
    {firstname:"hello",lastname:"hai",age:21},
]

let obj=a.map((x)=>x.firstname  + " " + x.lastname);
console.log(obj[0]);

