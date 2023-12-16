function createcard(title,cName,views,monthsOld,duration,thumbnail){
    //finish this function
    let viewstr
    if(views<1000){
        viewstr = views/1000 ;
    }
    else if(views>1000000){
        viewstr = views/1000000 + "M"
    }
    else{
        viewstr = views/1000 + "k";
    }
    let html =`     <div class="card">
    <div class="image">
<img src="${thumbnail}" alt="">
<div class ="capsule">${duration}</div>
    </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
        </div>
</div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
//"https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oamwEcCPYBEIoBSFXyq4qpAwrIARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindk92kYMgTcQbw
 createcard("Introduction to backend | sigma web development video #2","codewithHarry",560000,7,"31:22","imagelink")