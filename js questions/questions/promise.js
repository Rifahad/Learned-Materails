function add(a,b ) {
    return new Promise((resolve,reject)=>{
        resolve(a+b)
    })
}

function mul(a,sum) {
    return new Promise((resolve,reject)=>{
        resolve(sum*a)
    })
}

function div(a,mul) {
    return new Promise((resolve)=>{
        resolve(mul/a)
    })
}

function sub(mul,div) {
    return new Promise((resolve)=>{
        sub=mul - div;
        resolve(sub)
    })
}

add(100,20).then((sum)=>{
    console.log(sum);
    return mul(10,sum)
}).then((mul)=>{
    console.log(mul);
    return div(10,mul)
}).then((q)=>{
    console.log(q);
    return sub(q,10)
}).then((c)=>{
    console.log(c);
}).catch((erro)=>{
    console.log(erro+' error found');
}).finally(()=>{
    console.log('thanks');
})  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function odd(number1) {
    return new Promise ((resolve,reject)=>{
        if (number1 % 2 ==0) {
            resolve('even')
        }
        else{
            reject('odd')
        }
    })
}



odd(233)
.then((ans)=>{
    console.log(ans)
})
.catch((rej)=>{
    console.log(rej);
})































