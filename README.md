# 🧮 Retro Calculator

A clean, retro-style calculator built using **HTML, CSS, and JavaScript**.  
Supports basic arithmetic operations, percent calculation, input validation, and keyboard control.

<img src="simple-calulator.png" alt="Live demo" width="200"/>

---

## 🔗 Live Demo

👉 **Try it here:**  
[https://calculator-leejunghee.vercel.app/](https://calculator-leejunghee.vercel.app/)

---

## ✨ Features

-  **Basic arithmetic**: `+`, `-`, `×`, `÷`, `%`
-  **Input control**: decimal point & max 11-digit limit
-  **Keyboard support**: Use number keys, operators, Enter, and Backspace
-  **Clear (`C`)**, **Backspace**, and **Sign toggle (±)** support
-  **Responsive display** with digit formatting (up to 11 chars)
-  **Retro UI look** with pixel-perfect CSS layout

---

## 📁 Project Structure
<div>📦 calculator-project</div>
<div>┣ 📄 index.html        # HTML markup</div>
<div>┣ 📄 calculator.css    # Styling</div>
<div>┗ 📄 calculator.js     # Logic & event handling</div>

---

## 🔧 How It Works

The calculator uses **object-based operators** and **state-controlled logic**:

```js
const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};
```
- firstOperand, operator, and waitingState track the operation flow.
- Input is processed either by click or keyboard via DOM events.
- Decimal formatting is trimmed to fit within 11 digits using toFixed().

---

## 💡 Why This Project?

This project was built as a JavaScript fundamentals challenge to practice:
 - DOM manipulation
- Event delegation
- Functional state management
- Input sanitization and edge-case handling

It’s a great example of building a fully functional app with no frameworks — just pure JS.

---

## 🛠️ Built With
HTML5
CSS3
JavaScript (ES6+)

---

## 📜 License

MIT License © 2025 lee-jung-hee
