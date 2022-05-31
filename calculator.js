const sum = function(a, b){
    return a + b;
};

//subtraction must have start number as it is not commutative
const subtract = (startNumber,...args) => {
    let total = startNumber;
    for(let num of args){
        total -= num;
    }
    return total;
}

//commutative
const multiply = (...args) => {
    let total = 1;
    for(let num of args){
        total *= num;
    }
    return total;
}

//not commutative
const divide = (startNumber,...args) => {
    let total = startNumber;
    for(let num of args){
        total /= num;
    }
    return total;
}

const modulus = (a,b) => {
    return a%b
};

const even = (a) => {
    if(modulus(a,2) == 0){return true}
    return false;
};

const odd = (a) => {
    if(modulus(a,2) == 1){return true}
    return false;
};

const evenOrOdd = (a,parity) => {
    if(parity == "even"){
        return even(a);
    } else if(parity == "odd"){
        return odd(a);
    } else return "Invalid parity argument"
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd,
    evenOrOdd
};
