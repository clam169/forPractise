let squareRoot = (number) => {
    return Math.sqrt(number)
}

let square = (number) => {
    return (number*number)
}

let distance = (num1, num2) => {
    return (squareRoot((square(num1)) + (square(num2))));
}

module.exports = { squareRoot, square, distance }
