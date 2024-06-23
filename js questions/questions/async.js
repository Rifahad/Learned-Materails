function add(a,b) {
    return Promise.resolve(a+b)
}

function sub(a,sum) {
    return Promise.resolve(a-sum)
}

function mul(b,sub) {
    return Promise.resolve(b*sub)
}

function div(c,mul) {
    return Promise.resolve(c/mul)
}

async function operations() {
    try{
    const sum= await add(150,50);
    console.log(sum);
    
    const substract=await sub(20,sum);
    console.log(substract);

    const multiply=await mul(10,substract);
    console.log(multiply);

    const division=await div(20,multiply);
    console.log(division);
    }

    catch(error){   
        console.log('error found '+error);
    }
}

operations()


// let a=[2,3,44,32,45,87]
// let b=a.reduce((accumilator,currentValue,index,array)=>{
// },0)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// function add(a,b ) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(a+b)
//         },3000);
//     })
// }

// function mul(a,sum) {
//     return new Promise((resolve,reject)=>{
//         resolve(sum*a)
//     })
// }

// function div(a,mul) {
//     return new Promise((resolve)=>{
//         resolve(mul/a)
//     })
// }

// function sub(mul,div) {
//     return new Promise((resolve)=>{
//         sub=mul - div;
//         resolve(sub)
//     })
// }

// async function name(params) {
//     let b= await add(1,3)
//     let c= await mul(b,1)
//     console.log(c)
// }
// name()