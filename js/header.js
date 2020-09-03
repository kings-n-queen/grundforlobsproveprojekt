function burgermenu(){ 

    let burgerKnap = document.querySelector(".burger-knap");
    let myNavbar = document.getElementById("myNavbar");
    
    burgerKnap.addEventListener("click", function(){
      myNavbar.classList.toggle("js-hidden");
    });
    }
    
    export default burgermenu;
