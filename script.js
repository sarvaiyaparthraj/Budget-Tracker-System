let totalBudget = 0;
let totalExpenses = 0;
let expenses = [];

const budgetInput = document.querySelectorAll("#budget")[0];
const expenseTitleInput = document.querySelectorAll("#budget")[1];
const expenseAmountInput = document.querySelectorAll("#budget")[2];

const buttons = document.querySelectorAll("button");
const addBudgetBtn = buttons[0];
const addExpenseBtn = buttons[1];
const resetBtn = document.getElementById("addBudgetReset");

const totalBudgetElement = document.getElementById("totalBudget");
const totalExpensesElement = document.getElementById("totalexpenses");
const budgetLeftElement = document.getElementById("budgetleft");
const expenseList = document.getElementById("expenseList");



addBudgetBtn.addEventListener("click", function () {

    const budget = Number(budgetInput.value);

    if (budget <= 0) {
        alert("Please enter a valid budget");
        return;
    }

    totalBudget += budget;

    updateSummary();

    budgetInput.value = "";
});



addExpenseBtn.addEventListener("click", function () {

    const title = expenseTitleInput.value.trim();
    const amount = Number(expenseAmountInput.value);

    if (title === "") {
        alert("Please enter expense title");
        return;
    }

    if (amount <= 0) {
        alert("Please enter a valid expense amount");
        return;
    }

    if (amount > getBudgetLeft()) {
        alert("Expense amount is greater than budget left");
        return;
    }

    const expense = {
        id: Date.now(),
        title: title,
        amount: amount
    };

    expenses.push(expense);

    totalExpenses += amount;

    updateSummary();
    displayExpenses();

    expenseTitleInput.value = "";
    expenseAmountInput.value = "";
});



function getBudgetLeft() {
    return totalBudget - totalExpenses;
}



function updateSummary() {

    const budgetLeft = getBudgetLeft();

    totalBudgetElement.textContent = totalBudget.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    budgetLeftElement.textContent = budgetLeft.toFixed(2);
}



function displayExpenses() {

    expenseList.innerHTML = "";

    expenses.forEach(function (expense) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.title}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>
                <button 
                    class="btn btn-danger btn-sm"
                    onclick="deleteExpense(${expense.id})">
                    Delete
                </button>
            </td>
        `;

        expenseList.appendChild(row);
    });
}



function deleteExpense(id) {

    const expense = expenses.find(function (item) {
        return item.id === id;
    });

    if (!expense) {
        return;
    }

    totalExpenses -= expense.amount;

    expenses = expenses.filter(function (item) {
        return item.id !== id;
    });

    updateSummary();
    displayExpenses();
}




updateSummary();
displayExpenses();