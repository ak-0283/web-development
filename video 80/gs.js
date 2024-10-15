class User{
    
    constructor(name){
        // invokes the setter
        this.name = name
    }

    get name(){
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("john");
console.log(user.name); // john

user.name = "ABHAY" //name is too short
console.log(user.name)
