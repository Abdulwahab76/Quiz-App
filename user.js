let name = sessionStorage.getItem("name");
let point1 = sessionStorage.getItem("points");
let time = sessionStorage.getItem("time");
document.querySelector(".name").innerHTML = name
document.querySelector(".points").innerHTML = point1;
document.querySelector(".time").innerHTML = time;