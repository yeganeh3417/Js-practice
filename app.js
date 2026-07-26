var number = 10;
if(number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

var number = 10;
console.log(number % 2 === 0 ? "Even" : "Odd");



var cart = [
    { name: "Headphones", price: 70 },
    { name: "Mobile", price: 500 },
    { name: "Mouse", price: 30 }
];
var sumPrice = cart[0].price + cart[1].price + cart[2].price;
if (sumPrice > 100) {
    console.log("Discount");
} else {
    console.log("No Discount");
}



var weekday = 3;
switch (weekday) {
    case 3:
    case 4:
        console.log("soon weekend");
        break;

    case 5:
    case 6:
        console.log("weekend");
        break;

    default:
        console.log("looking for weekend");
}