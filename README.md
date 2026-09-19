# 💰 Budget Tracker System

A simple and user-friendly **Budget Tracker System** built using **HTML, CSS, JavaScript, and Bootstrap**.

This project allows users to add a budget, record expenses, view total expenses, check the remaining budget, and delete expenses from the expense history.

---

## 🚀 Features

- ✅ Add Budget
- ✅ Add Expense
- ✅ Expense Title & Amount Validation
- ✅ Prevent expenses greater than the remaining budget
- ✅ Display Total Budget
- ✅ Display Total Expenses
- ✅ Display Remaining Budget
- ✅ Expense History Table
- ✅ Delete Individual Expenses
- ✅ Reset All functionality
- ✅ Responsive and clean UI
- ✅ Bootstrap integration

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and layout
- **JavaScript** – Application logic and DOM manipulation
- **Bootstrap 5.3.8** – UI components and styling

---

## 📂 Project Structure

```text
Budget-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How to Run

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project

Open the project folder in **VS Code**.

### 3. Run the Application

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

---

## 💡 How It Works

### Add Budget

Enter a valid budget amount and click **Add Budget**.

The amount is added to the total budget.

### Add Expense

Enter:

- Expense title
- Expense amount

Then click **Add Expense**.

The application checks that:

- Expense title is not empty.
- Expense amount is greater than zero.
- Expense does not exceed the remaining budget.

### Expense History

Every added expense appears in the expense history table with:

- Expense Name
- Amount
- Delete button

### Delete Expense

Click the **Delete** button to remove an expense.

The total expense and remaining budget are automatically updated.

---

## 📊 Budget Calculation

The application calculates the remaining budget using:

```text
Budget Left = Total Budget - Total Expenses
```

### Example

```text
Total Budget    = ₹10,000
Total Expenses  = ₹7,500
Budget Left     = ₹2,500
```

---

## 🔑 JavaScript Concepts Used

This project demonstrates several important JavaScript concepts:

- Variables
- Arrays
- Objects
- Functions
- `addEventListener()`
- DOM Manipulation
- `querySelector()`
- `getElementById()`
- `createElement()`
- `forEach()`
- `find()`
- `filter()`
- Template Literals
- Number Conversion
- Input Validation
- Dynamic HTML Generation

---

## 🎯 Project Purpose

The main purpose of this project is to practice **JavaScript DOM manipulation, arrays, objects, functions, event handling, and CRUD-like operations** through a practical project.

---

## 🔮 Future Improvements

The project can be improved by adding:

- 💾 LocalStorage support
- 📅 Expense dates
- 📈 Expense charts
- 🔎 Search expenses
- ✏️ Edit expenses
- 📱 Better mobile responsiveness
- 🔐 User authentication
- 📊 Monthly expense reports
- 🌙 Dark mode

---

## 👨‍💻 Author

**Sarvaiya Parthrajsinh**

Software Engineer & Full-Stack Developer

### Skills

HTML • CSS • JavaScript • Bootstrap • Node.js • Express.js • MySQL • MongoDB • Git • GitHub

---

## 📄 License

This project is created for **learning and educational purposes**.
