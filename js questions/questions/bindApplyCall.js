
person1={
    name:"rt",
    place:'malappuram',
}


person2={
    name:"sinan",
    place:'palakkad',
}

function fn (x,y){
    console.log(this.name+' '+this.place,x,y);
}

///////////////////////call //////////////////////////
fn.call(person1,'hai','c')

////////////////////// apply /////////////////////////
// 

fn.apply(person2,['v' ,'c'])

///////////////////// bind ///////////////////////////

let d = fn.bind(person2,['v','c'],['dragon'])
d()
