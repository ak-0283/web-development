let a = prompt("enter first number")

let b = prompt("enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)     //to convert string to integer

function main(){
let X = 1
//to handle error use try_catch
try {
    console.log("the sum is ",sum*X)    
    return true
} catch (error) {
    console.log("error aa gya bhai")
    return false
}

//agar (finally) nhi use kiye toh return ke niche wala code nhi chalega
finally{    //agar koi chahata hai ki return ke niche wala code chale to (finally) use krke ho skta hai.
    console.log("files are being closed and db connection is being closed")
}
}
let c = main()