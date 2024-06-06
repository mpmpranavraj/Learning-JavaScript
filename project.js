// let x = document.querySelector("h2");
// setTimeout(function(){
//     x.style.color = "red";
// x.style.fontFamily= "Gill Sans";
// },4000)


// let y = document.querySelector("h1");
// setTimeout(function(){
//     y.innerHTML = "Changed";
// },2000)

let x = document.getElementById("1");
let y = document.getElementById("2");
let z = document.getElementById("3");

x.addEventListener("click", function() {
    x.style.color = "red";
    x.style.backgroundColor = "grey";
});

x.addEventListener("mouseleave", function() {
    x.style.color = "Black";
    x.style.backgroundColor = "White";
});

y.addEventListener("mouseenter", function() {
    y.style.color = "Yellow";
    y.style.backgroundColor = "grey";
});

y.addEventListener("mouseleave", function() {
    y.style.color = "Black";
    y.style.backgroundColor = "White";
});

y.addEventListener("click", function() {
    z.style.color = "white";
    z.style.backgroundColor = "purple";
});

z.addEventListener("click", function() {
    x.style.color = "black";
    x.style.backgroundColor = "yellow";
    x.innerHTML = "Surprised";
});
