let car ={
    brand:'toyota',
    model:2021,
    specs:{
        engine:'v6',
        capacity:6,
        kmperhr:100
    }
}

////////////////////////////////////////////////keys?/////////???????????????????????????????????

let keys=Object.keys(car)
// console.log(keys);


///////////////////entries//////////////////////////////////////////////////////////
let total=Object.entries(car)
console.log(total);
console.log(total[1]);
let ceel =Object.seal(car)
console.log(ceel);

// console.log(ceel.brand);

ceel.brand='audi'// we can edit on it
// console.log(ceel.brand);

ceel.code='hai'; /// we can't able to add any elements to it
console.log(ceel);

// console.log(car);

//////////////////////////////////////////freeze /////////////////////////////////////////////

let freeze= Object.freeze(car) // enable to do any performance on it 



////////////////////////////////////////shallow copy ////////////////////////////////////////

//it used copy object 
//it doesn't make any change on the copied object
//but it change on nested objects
//we can able to do it by using spread operator 
//example:

let spread ={...car}
// console.log(spread);

//also Object.assaign(variable were we want to store ,object name)

let hai={}
Object.assign(hai,car)
// console.log(hai);



////////////////////////////////////deep copy ///////////////////////////////////////////////

