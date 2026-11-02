let total = 0;

function addExpense() {
let name = document.getElementById("expenseName").value;
let amount = document.getElementById("expenseAmount").value;

if (name === "" || amount === "") {
alert("Please enter expense details");
return;
}

let expenseList = document.getElementById("expenseList");

let item = document.createElement("li");
item.textContent = name + " - ₹" + amount;

expenseList.appendChild(item);

total = total + Number(amount);

document.getElementById("totalAmount").textContent = total;

document.getElementById("expenseName").value = "";
document.getElementById("expenseAmount").value = "";
}
