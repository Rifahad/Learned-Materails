let a={
    name:'sinan',
    age:32,
    address:{
        place:'koyilandi',
        district:'malappuram',
        pin:676317
    }
}

Object.freeze(a)
Object.freeze(a.address)
// a.name='rt'
a.address.place='kondotty'
console.log(a);


