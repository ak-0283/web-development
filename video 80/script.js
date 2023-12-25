//    let obj = {
//        a: 1,
//        b:"abhay"
//    }
//    console.log(obj)
//    
//    let animal = {
//        eats: true
//    };
//    
//    let rabbit = {
//        jumps: true
//    };
//    
//    rabbit.__proto__ = animal; // sets rabbit.[[prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("kha rha hoon")
    }

    jumps(){
        console.log("kood rha hu")
    }
}


class Lion extends Animal {  //to brings those characteristics from animal class use extends
    constructor(name){
        super(name)
        console.log("object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("kha rha hu roar")
    }
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("shera")
console.log(l)