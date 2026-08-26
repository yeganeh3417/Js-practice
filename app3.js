const arr = [1, 2, 3, 4];

function operation(array, callback) {
    let result = array[0];

    for (let i=1 ; i<array.length ; i++) {
        const item = array[i];
        result = callback(result, item);
    }
    return result;
}

function sum(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}



const sumResult = operation(arr, sum);
console.log(sumResult);

const mulResult = operation(arr, mul);
console.log(mulResult);

const minusResult = operation(arr, (a, b) => a - b);
console.log(minusResult);