let random = Math.random
let a=prompt("enter the first number")
let c=prompt("enter operation")
let b=prompt("enter the second number")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",    
}
console.log(random)
if(random > 0.1) {
    //perform correct calculation
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //perform wrong calculation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

