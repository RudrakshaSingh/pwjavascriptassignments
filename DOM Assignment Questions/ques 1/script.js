const decrement=document.getElementById("decrement")
const increment=document.getElementById("increment")
const displayValue=document.getElementById("displayValue")
const reset=document.getElementById("reset")

decrement.addEventListener("click",function(){
    const value = Number(displayValue.innerText);  
    if (value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negative value not allowed");
    }
});
increment.addEventListener("click",function(){
    const value = Number(displayValue.innerText);  
    if (value < 10) {
        displayValue.innerText = value + 1;
    } else {
        alert("value above 10 not allowed");
    }
});
reset.addEventListener("click",()=>
    displayValue.innerText=0)