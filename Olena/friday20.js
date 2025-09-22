
//task 1!!!!!!!!!

//function declaration

function  getAreaDeclaration (width, height) {
    return width * height;
}
console.log ("area of a rectangle is ", getAreaDeclaration(10,5));


// Function Expression
const getAreaExpression = function (width, height) {
return  width * height;
}
console.log ("area of a rectangle is ", getAreaExpression (10,5));

// arrow function
const getAreaArrow = (width, height) => width * height;
console.log ("area of a rectangle is ", getAreaArrow (10,5));

//task 2!!!!!!!!!
function isAdult(age) {
  return age >= 18;
}

console.log (isAdult (15));
console.log (isAdult (25));

/// task 3
function checkOrder (available, ordered) {
if (available < ordered) {
    return “Your order is too large, we don’t have enough goods.”;
}
if  (ordered === 0) {
    return “Your order is empty”;
}
return “Your order is accepted";

}



    