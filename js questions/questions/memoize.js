// let m = {};

// const f = (n) => {
//     console.log(m);
//     if (m.hasOwnProperty(n)) {
//         return m[n];
//     } else {
//         let s = 0;
//         for (let j = 1; j <= n; j++) {
//             for (let i = 1; i <= n; i++) {
//                 s += j * j;
//             }
//         }
//         console.log("here",n);
//         m[n] = s; 
//         return s;
//     }
// }
// console.log(f(20000));
// console.log(f(30000));
// console.log(f(20000));
// console.log(f(0));
// console.log(f(0));
// console.log(f(0));
// console.log(f(0));
// f(0);
// f(0);
// f(0);
// f(0)
// console.log(m);

//////////////////////////////////////////////////////////////////////////////////////////////////////////


let cache ={}
function abcd(sum){
    if(cache[sum]){
        console.log(cache[sum]);
    }else{
        for (let i = 0; i < 10000000000; i++) 
        {}
        cache[sum]=sum
        console.log(cache[sum]);
    }
}

abcd(10)
abcd(10)
abcd(10)
abcd(20)
abcd(20)
