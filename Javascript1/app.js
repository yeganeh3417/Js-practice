var li =
document.getElementsByTagName("li");
for (var i=0 ; i<li.length ; i++) {
    li[i].innerText = (i+1) + ". "
    +li[i].innerText;

    if((i+1) %2 === 0) {
        li[i].style.color = "red";
    } else {
        li[i].style.color = "green";
    }
}



var img = document.getElementsByTagName("img");
img[0].setAttribute("src", "laptop.webp");
img[0].setAttribute("alt", "laptop");
img[0].setAttribute("width", "200");
img[0].setAttribute("height", "200");

img[0].style.border = "2px solid gray";
img[0].style.borderRadius = "20px";



var div = document.getElementById("mydiv");
div.innerHTML= `
<p>yeganeh</p>
<span>age: 17</span>
<img src="./laptop.webp" width="100">
`;
