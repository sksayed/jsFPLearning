
let user1Input = prompt("please enter first number")

let user2Input = prompt("please enter Second number")

let Sum = Number.parseInt(user1Input) + Number.parseInt(user2Input);

//alert("The Sum of the two numbers is "+Sum)


let element = document.getElementById("result");
if (element) {
    element.innerHTML = Sum.toString();
}