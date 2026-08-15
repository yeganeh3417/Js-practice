// var li =
// document.getElementsByTagName("li");
// for (var i=0 ; i<li.length ; i++) {
//    li[i].innerText = (i+1) + ". "
//    +li[i].innerText;

//    if((i+1) %2 === 0) {
//        li[i].style.color = "red";
//    } else {
//        li[i].style.color = "green";
//    }
// }



// var img = document.getElementsByTagName("img");
// img[0].setAttribute("src", "laptop.webp");
// img[0].setAttribute("alt", "laptop");
// img[0].setAttribute("width", "200");
// img[0].setAttribute("height", "200");

// img[0].style.border = "2px solid gray";
// img[0].style.borderRadius = "20px";



// var div = document.getElementById("mydiv");
// div.innerHTML= `
// <p>yeganeh</p>
// <span>age: 17</span>
// <img src="./laptop.webp" width="100">
// `;



var text = document.getElementById("count");
console.log(typeof text.innerText);

var number = Number(text.innerText);
console.log(typeof number);
checkStyle();

function handleDecrease() {
    if(number > 0) {
       number--;
       text.innerText = number;
    }
    checkStyle()
}

function handleIncrease() {
    if(number < 5) {
       number++;
       text.innerText = number;
    }
    checkStyle()
}

function checkStyle() {
    var incBtn = document.getElementById("inc");
    var decBtn = document.getElementById("dec");

    if(number >= 5) {
        incBtn.setAttribute("disabled", true)
    }else{
        incBtn.removeAttribute("disabled")
    }

    if(number <= 0) {
        decBtn.setAttribute("disabled", true)
    }else{
        decBtn.removeAttribute("disabled")
    }
}