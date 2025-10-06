Perfect! I can create a **single Markdown (`.md`) file** containing **all your Day 1 interview practice questions**—both coding and technical questions—ready to push to GitHub. You can later replicate this format for other days/topics.

Here’s the full `.md` content:

````markdown
# Day 1: Mixed Interview Practice (Frontend + Full Stack JS)

🕒 **Total Duration:** ~90–120 mins / session

---

## 👨‍💻 Round 1: Coding Questions

### 1. Easy
**Problem:** Write a function `isPalindrome(str)` that returns `true` if the string is a palindrome and `false` otherwise. Ignore casing and spaces.

```javascript
function isPalindrome(str) {
    const cleanStr = str.replace(/\s+/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}
````

---

### 2. Medium

**Problem:** Implement a debounce function in JavaScript. Show how you’d use it for a search input box.

```javascript
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Example usage:
const handleSearch = debounce((value) => console.log("Searching:", value), 300);
```

---

### 3. Medium

**Problem:** Given an array of numbers, implement `groupBy` function to group elements based on a callback.

```javascript
function groupBy(array, callback) {
    return array.reduce((acc, val) => {
        const key = callback(val);
        if (!acc[key]) acc[key] = [];
        acc[key].push(val);
        return acc;
    }, {});
}

// Example
groupBy([6.1, 4.2, 6.3], Math.floor)
// => { '4': [4.2], '6': [6.1, 6.3] }
```

---

### 4. Optional (Advanced)

**Problem:** Write a function `deepClone(obj)` that deeply clones a nested object (without using `structuredClone` or libraries).

```javascript
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(deepClone);
    const clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
```

---

## 🧠 Round 2: Technical Questions

1. Explain the difference between **microtasks** and **macrotasks** in the event loop.
2. What happens during **variable hoisting** with `var`, `let`, and `const`?
3. Explain **closures** in your own words with a practical example.
4. How is `this` handled differently in **arrow functions** vs **regular functions**?
5. How would you **prevent runtime errors** in a large JS codebase?
6. Difference between **shallow copy** and **deep copy** in objects?
7. How does **prototypal inheritance** work in JS?
8. What are **rest** and **spread operators**, with examples?
9. Explain **debouncing** and **throttling**, and when to use each.
10. How does `JSON.stringify()` and `JSON.parse()` help in working with APIs?
11. Advantages of using **modules** (`import/export`) in ES6.
12. Difference between **syntax, runtime, and logical errors**.
13. Explain **for...in** vs **for...of** loops and when to use each.
14. How does **optional chaining (?.)** help write safer code?
15. How would you **unit test a function** in JS using Jest?

---

## ✅ How to Use This File

1. Open in VSCode / GitHub → Readable Markdown.
2. Solve coding questions in **`code blocks`** or in your local editor.
3. Answer technical questions in comments or another markdown file for your notes.
4. Repeat daily with new sets for continuous improvement.

---

```

---


