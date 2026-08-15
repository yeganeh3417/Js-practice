var products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        quantity: 10
    },
    {
        name: "Shoes",
        category: "Fashion",
        price: 80,
        quantity: 15
    },
    {
        name: "Phone",
        category: "Electronics",
        price: 600,
        quantity: 25
    },
    {
        name: "iphone 17",
        category: "Mobile",
        price: 1000,
        quantity: 5
    }
];

var list = document.getElementById("productList");

function showProducts() {
    list.innerHTML = "";
    var search = document.getElementById("search").value;
    var category = document.getElementById("categoryFilter").value;

    for (var i=0 ; i<products.length ; i++) {
        if (products[i] != null &&
             (search == "" || products[i].name == search) &&
             (category == "All" || products[i].category == category)
            ) {

                 list.innerHTML +=
                 "<tr>" +
                 "<td>" + products[i].name + "</td>" +
                 "<td>" + products[i].category + "</td>" +
                 "<td>" + products[i].price + "</td>" +
                 "<td>" + products[i].quantity + "</td>" +
                 "<td><button onclick='deleteProduct("+ i +")'>Delete</button></td>" +
                 "</tr>";
             }
    }
}
function deleteProduct(i) {
    products[i] = null;
    showProducts();
}

function addProduct() {

    products[products.length] = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
        quantity: document.getElementById("quantity").value
    };
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";

    showProducts();
}

showProducts(); 

