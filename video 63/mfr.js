//mfr stands for map filter reduce
let arr=[1,13,5,7,11];
//let newa=[]
//for (let index = 0; index < arr.length; index++) {
//    const element = arr[index];
//    newa.push(element**2)
//}
let newa=arr.map((e,index,arr)=>{
    return e**2
    })
console.log(newa)
const greaterThanSeven =(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let arr2=[1,2,3,4,5,6]
const red =(a,b)=>{
    return a+b
}
console.log(arr2.reduce(red))


Array.from("abhay")