function nice(name) {
    console.log("hey" + name + "you are nice!")
    console.log("hey" + name + "you are good!")
    console.log("hey" + name + "your tshirt is nice!")
    console.log("hey" + name + "your course is too good too!")
}
nice(" abhay ")              //this is first function
nice(" ashish ")
//console.log("hey abhay you are nice!")
//console.log("hey abhay you are good!")
//console.log("hey abhay your tshirt is nice!")
//console.log("hey harry your course is too good too!")


function sum(a,b,c=3) {
    //console.log(a + b)   this is second function,c=3 i.e is default value
   console.log(a,b,c)
    return a + b + c      //using return to get the output
}
result1 = sum(3,5)
result2 = sum(7,5)
result3 = sum(4,17,1)
console.log("the sum of these numbers:",result1)
console.log("the sum of these numbers:",result2)
console.log("the sum of these numbers:",result3)

const func1 = (x)=>{   //arrow function
    console.log("i am an arrow function",x)
}    
func1(42);
func1(43);
func1(84);