# 📌 Day 01: Interview Practice Questions (Frontend + Full Stack JS)
---

````markdown
# 📌 Day 01: Interview Practice (Frontend + Full Stack JS)

🕒 **Total Duration:** ~90–120 mins/session  
🎯 **Focus:** JavaScript, React/Next.js, Node.js, MERN stack  
````


---

## 👨‍💻 Round 1: Coding Questions

### 1️⃣ Easy
**Problem:** Palindrome Checker  
Write a function `isPalindrome(str)` that returns `true` if the string is a palindrome and `false` otherwise. Ignore casing and spaces.

```javascript
function isPalindrome(str) {
    const cleanStr = str.replace(/\s+/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example
console.log(isPalindrome("Race car")); // true
````

---

### 2️⃣ Medium

**Problem:** Implement Debounce Function
Create a debounce function in JavaScript. Show how it would work for a search input.

```javascript
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage example
const handleSearch = debounce((value) => console.log("Searching:", value), 300);
```

---

### 3️⃣ Medium

**Problem:** Group Elements by Callback
Given an array, implement a `groupBy` function to group elements based on a callback.

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
// Output: { '4': [4.2], '6': [6.1, 6.3] }
```

---

### 4️⃣ Optional (Advanced)

**Problem:** Deep Clone Object
Write a function `deepClone(obj)` that deeply clones a nested object without using libraries.

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

// Example
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
```

---

## 🧠 Round 2: Technical & Concept Questions

1. **Event Loop:** Difference between **microtasks** and **macrotasks**.
2. **Hoisting:** What happens with `var`, `let`, and `const`?
3. **Closures:** Explain with a practical example.
4. **This Keyword:** Differences in **arrow functions** vs **regular functions**.
5. **Error Prevention:** How would you prevent runtime errors in a large JS codebase?
6. **Copying Objects:** Difference between **shallow copy** and **deep copy**.
7. **Prototypes:** How does **prototypal inheritance** work?
8. **Spread & Rest:** Explain and give examples.
9. **Performance:** Explain **debouncing** vs **throttling** and use cases.
10. **JSON Handling:** How do `JSON.stringify()` and `JSON.parse()` help with APIs?
11. **Modules:** Advantages of ES6 `import/export`.
12. **Errors:** Difference between **syntax**, **runtime**, and **logical** errors.
13. **Loops:** `for...in` vs `for...of` — usage and differences.
14. **Optional Chaining:** How `?.` helps write safer code.
15. **Testing:** How would you unit test a function using **Jest**?

---
