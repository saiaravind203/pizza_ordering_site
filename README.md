# 🍔 Jimmy's Dinner – Food Ordering App

Jimmy's Dinner is a simple and interactive food ordering web application built using **HTML, CSS, and Vanilla JavaScript**.  
Users can add or remove items, view their order summary, calculate total price, and complete payment via a modal form.

---

## 🚀 Features

- 📋 Display food menu dynamically
- ➕ Increase / ➖ decrease item quantity
- ❌ Remove items from the order
- 🧾 Order summary with total price calculation
- 💳 Payment modal with form validation
- ✅ Success message after payment submission
- 🧠 Event delegation for better performance
- 🔄 Dynamic rendering without page reload

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Font Awesome** (icons)
- **Google Fonts** (Smythe)

---

## 📂 Project Structure

├── index.html
├── index.css
├── index.js
├── data.js
└── README.md


---

## ⚙️ How It Works

1. Menu items are loaded dynamically from `data.js`
2. User can increment or decrement item quantities
3. Order section appears only when items are added
4. Clicking **Complete Order** opens the payment modal
5. Submitting the form:
   - Prevents default refresh
   - Closes the modal
   - Displays a success message

---

## 🧩 Key JavaScript Concepts Used

- Event Delegation
- Array methods (`map`, `filter`, `find`, `reduce`, `some`)
- DOM Manipulation
- Form submission handling
- Modular JavaScript (`type="module"`)

---

## ▶️ How to Run the Project

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/jimmys-dinner.git
