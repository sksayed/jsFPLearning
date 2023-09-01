import * as Underscore from 'underscore'

// it returns true or false 
function isArray(array) {
    return Underscore.isArray(array)
}
// here i am creating a function using its generic values
function unsplat(fun) {
    
    return function () {
       
        return fun.call(null , [...arguments])
    }
}
// So here , unsplat is a generic function 
// It takes anykind of function , any number of arguments , and is called after its assaignment
let joinElements = unsplat((array) => array.join(' '))
let sum = unsplat((array) => array.reduce((acc , current) => acc + current))
let x = joinElements(1,2,3)
let objectJoined  = joinElements(5 , x  , true ,  {} , [8,9,10] , 0)
console.log(objectJoined)
console.log(sum(1,2,3 , 4564654))

let h = [1,2,3,4,5,6,8 , 78 ,56,46,85,22,16,34].sort((x,y) => {
    return x - y ; 
})

console.log(h.join(' '))

