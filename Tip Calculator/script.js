const btn = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput =  document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
    const billValue = billInput.value;  //return a string,even fro type="number" ex:100 it give "100".
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2); 
    //toFixed(2) convert the number into string with exactly 2 decimal places eg: 110-> "110.00"
    //innerText sets the visible text inside the <span> to that string.
}

btn.addEventListener("click", calculateTotal); 
//attaches a click event listener to th button. When the button is clicked, the calculateTotal functions runs.