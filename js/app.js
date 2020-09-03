// import listevisning from "./listevisning";

let burgerKnap = document.querySelector(".burger-knap");
let myNavbar = document.getElementById("myNavbar");

burgerKnap.addEventListener("click", function(){
  console.log("Virker det overhovedet?")
  myNavbar.classList.toggle("js-hidden");
})