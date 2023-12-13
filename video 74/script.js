let button = document.getElementById("btn")
//List of all mouse events
//https://developer.morzilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click",()=>{    //single click method
    document.querySelector(".box").innerHTML="<b>yayy you were clicked</b> Enjoy your single click!"
 })
button.addEventListener("dblclick",()=>{    //double click method
   document.querySelector(".box1").innerHTML="<b>yayy you were clicked</b> Enjoy your double click!"
})
button.addEventListener("contextmenu",()=>{    //right click method
   alert("dont hack by right cilck please")
})
button.addEventListener("keydown",(e)=>{    //keydown click method
    //alert("dont hack by right cilck please")
    console.log(e)
})
document.addEventListener("keydown",(e)=>{    //everytime keydown  click method want to work
    console.log(e,e.key,e.keyCode)
})
 
 