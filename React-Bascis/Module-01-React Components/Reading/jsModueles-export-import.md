# 📦 JavaScript modules, imports - exports

In JavaScript, a **module** is essentially just a separate file that contains code.  
Modules allow you to **split your application into smaller, reusable pieces**, making the overall structure more modular, organized, and easy to maintain.

---

## 🧠 Why Use Modules?

Instead of writing everything in one huge file, you can:

- Break your code into smaller files (modules)  
- Reuse functionality by importing it wherever needed  
- Keep code more **readable** and **manageable**  
- Avoid naming conflicts by scoping variables to individual modules

A module can be as simple as a single function in a file, or it can contain entire libraries of logic.

For example, imagine you have the following function inside a file called `addTwo.js`:

```javascript
function addTwo(a, b) {
    console.log(a + b);
}
```

Right now, this is just a plain JS file. To make it a **module**, we need to export the function so that other files can import and use it.

---

## 📤 Exporting Modules

JavaScript supports two main types of exports:

1. **Default Exports** — One per file  
2. **Named Exports** — Multiple allowed per file

Let’s explore both 👇

---

### 1️⃣ Default Exports

A **default export** is useful when your file mainly exports **one thing** (e.g., a single function, class, or object).

There are two common ways to do this:

**✅ Inline Default Export**

```javascript
// addTwo.js
export default function addTwo(a, b) {
    console.log(a + b);
}
```

**✅ Exporting After Declaration**

```javascript
// addTwo.js
function addTwo(a, b) {
    console.log(a + b);
}

export default addTwo;
```

👉 Each file can only have **one default export**.

---

### 2️⃣ Named Exports

**Named exports** are used when you want to export **multiple items** from a single file.  
Unlike default exports, you can have **as many named exports as you like**.

For example:

```javascript
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}
```

You can export them using either of these methods:

**Method 1 — Export Before Declaration**

```javascript
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}
```

**Method 2 — Export All at Once**

```javascript
function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

export { addTwo, addThree };
```

👉 This makes it clear exactly what the module is exposing for others to use.

---

## 📥 Importing Modules

Just like exporting, there are **different ways to import** depending on how the module was exported.

Suppose we have two files in the same folder:

- `addTwo.js`  
- `mathOperations.js`  

We want to bring the code from `addTwo.js` into `mathOperations.js`.

---

### 🔸 Importing a Default Export

If `addTwo.js` exported a **default function**, the import looks like this:

```javascript
// addTwo.js
export default function addTwo(a, b) {
    console.log(a + b);
}
```

```javascript
// mathOperations.js
import addTwo from "./addTwo";

// Example usage
addTwo(3, 4);
```

✅ Notice:
- You can give the imported default function **any name you like**.
- You don’t need curly braces `{}`.
- The file path omits the `.js` extension.

---

### 🔸 Importing a Named Export

If `addTwo.js` used **named exports**, the syntax changes slightly:

```javascript
// addTwo.js
export function addTwo(a, b) {
    console.log(a + b);
}
```

```javascript
// mathOperations.js
import { addTwo } from "./addTwo";

addTwo(5, 7);
```

✅ Notice:
- You must use **the exact exported name** inside `{ }`.
- You can also import multiple named exports at once, like:
  ```javascript
  import { addTwo, addThree } from "./addTwo";
  ```

---

## 📝 Summary

| Concept              | Default Export                       | Named Export                          |
|-----------------------|---------------------------------------|------------------------------------------|
| **Quantity per file** | Only one                             | Multiple allowed                        |
| **Import syntax**     | `import name from './file'`          | `import { name } from './file'`         |
| **Flexibility**       | Can rename on import                 | Must use exported names (can alias)    |
| **Use case**          | For single main functionality        | For utility files or multiple exports  |

---

## 🚀 Quick Example

```javascript
// mathUtils.js
export default function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}
```

```javascript
// app.js
import add, { subtract, multiply } from "./mathUtils";

console.log(add(2, 3));        // 5
console.log(subtract(5, 2));   // 3
console.log(multiply(4, 3));   // 12
```

---

## 🟡 Key Takeaways

- A **module** is simply a JS file you can export and import.  
- **Default export** → one per file, imported without `{ }`.  
- **Named exports** → multiple per file, imported with `{ }`.  
- Use modules to **keep your code clean, reusable, and organized**.

---

📌 **Tip:**  
When working in the browser, make sure to use `<script type="module">` in your HTML to enable ES module syntax.

```html
<script type="module" src="./app.js"></script>
```

---

