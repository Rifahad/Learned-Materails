
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let c='sinan'
// k=-1;
// for (let i = 1; i <=9; i++) {
//     if(i<=5){   
//         k++
//     }
//     else{
//         k--
//     }
//     for (let j =0 ; j <=k; j++) {
//     document.write(c[j])
//     }
//     document.write('<br>')
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//f pattern

// for (let i = 1; i <=3; i++) 
// {
//     for (let j = 1; j <= i; j++) 
//     {
//         for(let k=1;k<=i;k++)
//         {
//         // if(k%2==0){
//         //     document.write("$ &nbsp")
//         // }else{
//             document.write(i+"&nbsp")
//         // }
//         }
//         document.write('<br>')
//     }
//     for (let k = 1; k <=i*2; k++) 
//     {
//         if (k%2==0) {
//             document.write('k &nbsp')
//         }else{
//             document.write('$ &nbsp')
//         }
//     }
//     document .write('<br>')
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for (let i = 1; i <4; i++) {
//     for (let j = 1; j <=4 ; j++) {
//         if (j<=i) {
//         }else{
//             document.write("*") 
//         }
//     }
//     for (let j = 1; j <=4 ; j++) {
//         if (j<=i) {
//             document.write("&nbsp")
//         }else{
//             document.write("*") 
//         }
//     }
//     document.write("<br>")
// }

// for (let i = 1; i <4; i++) {
//     for (let j = 1; j <=4 ; j++) {
//     if (j<=i) {
//         document.write("*") 
//     }else{
//         document.write("&nbsp")
//     }
//     }
// for (let j = 1; j <=4 ; j++) {
//     if (j<=i) {
//         document.write("*") 
//     }else{
//         document.write("&nbsp")
//     }
// }
// document.write("<br>")
// }   



////////////////////////////////////////////////////////////////////////////////////////////////////////////
// triangle

let k=-1;
for (let i = 1; i <= 7; i++) {
    let b=0;
    if(i<=4){
        k+=2;
    }else{
        k-=2;
    }
    for (let j = 1; j <=k; j++) {
        if(j==1|| j==k){
            document.write("*")
        }else{
            if(j<=i){
                b++
                document.write(b)
            }else if(j>=i){
                document.write(--b)
            }
        }
    }
    document.write("<br>")
}

