let arr=[6,5,4,32,1]
let sum=arr.reduce((acc,curv)=>{
    return acc+curv
})

console.log(sum,arr);


// //largest

// let large=arr.reduce((acc,curv)=>{
//     if (curv>acc) {
//         acc=curv
//     }
//     return acc
// },0)

// console.log(large);

///////////////  in object /////////////////////////////////////

// let ab=[
//     {firstname:"rt",lastname:"max",age:"name"},
//     {firstname:"shahaba",lastname:"saleem",age:21},
//     {firstname:"sinan",lastname:"pottan",age:21},
//     {firstname:"hello",lastname:"hai",age:"age"},
//     {firstname:"shahaba",lastname:"saleem",age:21},
//     {firstname:"rt",lastname:"max",age:20},
//     {firstname:"sinan",lastname:"pottan",age:21},
//     {firstname:"hello",lastname:"hai",age:21},
//     {firstname:"rt",lastname:"max",age:19},
// ];


// let obj=ab.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }else{
//         acc[curr.age]=1
//     }
//     return acc
// },{});

// console.log(obj);

/*
{
    {}
    20: 3
    21: 6
}

*/

//////////////////////////////////////////////////////////



