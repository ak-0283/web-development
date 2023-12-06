console.log("abhay")
//let boxes=document.getElementsByClassName("box")
//console.log(boxes)
//boxes[2].style.backgroundColor="red"

//document.getElementById("red").style.backgroundColor="red"

//document.querySelector(".box").style.backgroundColor="lightgreen"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    console.log(e)
    e.style.backgroundColor="lightgreen"
})