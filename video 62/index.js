/*create a business name generator by combining list of adjectives and shop name and
another word using javascript

Adjectives:             shop name:              another words:
Crazy                   engine                  bros
Amazing                 foods                   limited
Fire                    garments                hub*/

console.log("creating a new business name generator")
function adjective(){
    let a="crazy"
    let b="amazing"
    let c="fire"
    let d=Math.floor(Math.random()*3)
    if(d==0){
        return a
    }
    else if (d==1){
        return b
    }
    else if(d==2){
        return c
    }
}
function shop(){
    let a="engine"
    let b="foods"
    let c="garments"
    let d=Math.floor(Math.random()*3)
    if(d==0){
        return a
    }
    else if(d==1){
        return b
    }
    else if(d==2)
    {
        return c
    }
}
function another(){
    let a="bros"
    let b="limited"
    let c="hub"
    let d=Math.floor(Math.random()*3)
    if(d==0){
        return a
    }
    else if(d==1){
        return b
    }
    else if(d==2){
        return c
    }
}
console.log("business name: \n",adjective(),shop(),another())
