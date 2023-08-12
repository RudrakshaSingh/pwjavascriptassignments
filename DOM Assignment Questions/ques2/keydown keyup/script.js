// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.
let h1=document.getElementById("h1")
let box = document.getElementById("box");
let input = document.getElementById("display");

input.addEventListener("keydown", function (e) {
  h1.style.color = "red";
  h1.innerText = e.key + " is keyDown";
});

input.addEventListener("keyup", function (e) {
  h1.style.color = "green";
  h1.innerText = e.key + " is keyUp";
});