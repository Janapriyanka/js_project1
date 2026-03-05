# Registration Form with Real-Time Validation

## Project Description

This project is a simple **Registration Form** built using **HTML, CSS, and JavaScript**. The form collects user information such as **Name, Email, and Password** and performs **real-time validation** while the user types.

The main goal of this project is to demonstrate how **JavaScript form validation** works and how to improve user experience by providing instant feedback.

---

## Features

* Real-time validation using JavaScript
* Name field validation (only alphabets allowed)
* Email format validation
* Password minimum length validation (minimum 6 characters)
* Error messages displayed for invalid inputs
* Submit button remains **disabled until all fields are valid**
* Clean and simple user interface

---

## Technologies Used

* **HTML** – Structure of the form
* **CSS** – Styling and layout
* **JavaScript (DOM Manipulation)** – Form validation and interactivity

---

## Validation Rules

1. **Name**

   * Cannot be empty
   * Only alphabets are allowed

2. **Email**

   * Must follow a valid email format (example: [user@email.com](mailto:user@email.com))

3. **Password**

   * Minimum length: **6 characters**

4. **Submit Button**

   * Disabled by default
   * Enabled only when all fields are valid

---

## How It Works

1. The user enters data into the form fields.
2. JavaScript listens for input events.
3. Each field is validated in real time.
4. If all validations pass, the **Submit button becomes enabled**.

---

## Project Structure

```
registration-form
│
├── index.html
├── style.css
└── script.js
```

---

## Learning Outcomes

This project helped in understanding:

* JavaScript DOM manipulation
* Real-time form validation
* Event handling in JavaScript
* Improving user experience with instant feedback

---

## Future Improvements

* Add password strength indicator
* Add confirm password validation
* Store user data using local storage
* Improve UI with modern design

---

## Author

Developed as part of **JavaScript practice and frontend learning**.
