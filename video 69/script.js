let a=6;

function factorial(number){         //factorial using reduce method
let arr = Array.from(Array(number+1).keys())
let c = arr.slice(1,).reduce((a,b)=> a*b )
return c
}


//using for loop function
function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
    fac = fac * index
}
    return fac
}
console.log(factorial(a))
console.log(facfor(a))