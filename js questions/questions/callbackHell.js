
// function add(a,b,callback) {
//     let sum=a+b;
//     callback(sum)
// }


// function sub(b,sum,callback1) {
//     let sub=b-sum;
//     callback1(sub)
// }

// function mul(b,sub,callback2) {
//     let mul=b*sub;
//     callback2(mul)
// }

// function div(b,mul,callback3) {
//     let div=b/mul;
//     callback3(div)
// }

// add(200,200,(call)=>{
//     console.log(call);
//     sub(call,20,(calla)=>{
//         console.log(calla);
//         mul(10,calla,(callb)=>{
//             console.log(callb);
//             div(callb,10,(div)=>{
//                 console.log(div);
//             })
//         })
//     })
// })

// function x(y){
//     var a=10
//     console.log(y);
// }
// function y(x){
//     var b=20
//    x(b)
// }
// y(x)

function plus(a,b,callback){
    let add= a+b
    callback(add)
}

function multi(a,b,callback2){
    let mul=a*b
    callback2(mul)
}

function div(a,b,callback3){
    let divi=a/b
    callback3(divi)
}

function sub(a,b,callback4){
    let subt=a-b
    callback4(subt)
}

plus(100,200,(call)=>{
    console.log(call);
    multi(call,10,(call2)=>{
        console.log(call2);
        div(call2,10,(call3)=>{
            sub(call3,100,(call4)=>{
                 console.log(call4);
            })
        })
    })
})