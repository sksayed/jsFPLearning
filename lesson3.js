
//defining an empty object in js 
// let empty = {
//     name: "this is an empty object"
// };

// console.log(empty);

// for (let props in empty) {
//     if (empty.hasOwnProperty(props)) {
//         console.log('has own property to see')
//         console.log(empty.hasOwnProperty(props))
//         console.log(`${props}: ${empty[props]}`);
//     }
// }

// Object.keys(empty).forEach((val, index) => {
//     console.log(`${val} is property and index: ${index}`);
// })

// let nullObject = null;

// let nullObjectCreated = Object.create(null);

// console.log(nullObject);
// console.log(nullObjectCreated);

// let int = 5;
// console.log(int)
////------------------------------- 27th August 2022 --------------------///////////
//Object name User 
class UserByClass {
    constructor(name, email, gender) {
        this.name = name,
            this.email = email,
            this.gender = gender
        //you can write this inside a function in this way
    }

    print() {
        console.log(`Name of the user: ${this.name} \n` +
            `email of the user: ${this.email} \n` +
            `gender of the user: ${this.gender} \n`)
    };
}

function UserByFunc(name, email, gender) {
    this.name = name,
        this.email = email,
        this.gender = gender,
        //you can write this inside a function in this way
        this.print = () => {
            console.log(`Name of the user: ${this.name} \n` +
                `email of the user: ${this.email} \n` +
                `gender of the user: ${this.gender} \n`)
        };

}

let userOne = new UserByFunc("sayed", "sayed@gmail.com", "Male");
userOne.print();
let userTwo = new UserByClass("sadia", "sadia@gmail.com", "Female");
userTwo.print()
//Use the bind method to

class CanEat {
    constructor() {
        this.eat = true
    }
}

let canEat = new CanEat();

userOne.__proto__ = Object.create(canEat)
console.log(userOne?.canEat ?? userOne?.eat ?? 'nai')

////----------- Functional JavaScript --------------------------------//////

function existy(x) { return x != null };

function truthy(x) { return (x !== false) && existy(x) };

// here thing is very simple that 
// if condition is true only then run the callback function

function doWhen(cond, action) {
    if (truthy(cond))
        return action();
    else
        return undefined;
}
// here this method takes an object and a property name 
// if the object has that property and that property is a function then run that function
// else return 
function mymethod(object, property) {
    if (property in object) {
        if (typeof object[property] === "function") {
            return object[property].call(object)
        }
        return object[property]
    }
    return "no result";
}
        ///(Object , property) --> 
function executeIfHasField(target, name) {
    return doWhen(target[name], function () {
        var result = mymethod(target, name);
        console.log(['The result is', result].join(' '));
    });
}

// we will use a library called lodash to learn functional programming in JavaScrip

//import * as load from 'lodash'

executeIfHasField([1, 2, 3], 'reverse')



