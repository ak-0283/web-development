console.log(a1);    //using hosting here
async function sleep(){
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove(45)
        }, 1000);
    })
}
 

function sum(a,b,c){
    return a+b+c
}

// iife_syntax == Immediately Invove Function Expression
(async function main(){
    //var a1
    console.log(a1)

// let a = await sleep()
// console.log(a)
// let b = await sleep()
// console.log(b)

// let [x,y, ...rest] = [1,5,7,8,9,10] //destructing
// console.log(x,y,rest)

let obj  = {        //taking objects
    a: 1,
    b: 2,
    c: 3,
    }
    let {a,b} = obj
    console.log(a,b)


    let arr = [1,4,6]
    console.log(sum(arr[0] , arr[1] , arr[2]))
    console.log(sum(...arr))    //using spread operator

   var a1 = 6
})()
var a1 = 6      //using hosting here


const  sleep = async()=>{
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            reslove(45)
        }, 1000);
    })
}
 

const sum = async(a,b,c)=>{
    return a+b+c
}