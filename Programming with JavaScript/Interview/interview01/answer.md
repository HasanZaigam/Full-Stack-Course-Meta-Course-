
#### ✅ Solutions of Coding Questions 

**Method 1: Reverse String**

```js
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s+/g, '');
  const reversed = cleaned.split('').reverse().join('');
  console.log(cleaned === reversed ? "it is a palindrome" : "it is not a palindrome");
}
```

**Method 2: Two-pointer**

```js
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s+/g, '');
  let start = 0, end = cleaned.length - 1;

  while (start < end) {
    if (cleaned[start] !== cleaned[end]) {
      console.log("it is not a palindrome");
      return;
    }
    start++; end--;
  }
  console.log("it is a palindrome");
}
```

---

### 2️⃣ Debounce Function

**Problem:** Avoid firing API calls on every keystroke.

```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const searchAPI = (query) => console.log("Searching:", query);
const debouncedSearch = debounce(searchAPI, 500);
document.getElementById("search").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
```

**Key Points:**

* Debounce → wait until action **stops**.
* Throttle → limit calls **every X ms**.

---

### 3️⃣ Group By Function

```js
function groupBy(arr, callback) {
  const result = {};
  for (let value of arr) {
    const key = callback(value);
    if (!result[key]) result[key] = [];
    result[key].push(value);
  }
  return result;
}

// Example
groupBy([6.1, 4.2, 6.3], Math.floor)
// { '4': [4.2], '6': [6.1, 6.3] }
```

---

### 4️⃣ Deep Clone Object (Optional)

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) clone[key] = deepClone(obj[key]);
  }
  return clone;
}
```

---

## 🧠 Round 2 — Technical Questions

| Q# | Topic                      | Model Answer / Example                                                                                                   |
| -- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 3  | **Closures**               | Inner function remembers outer variables. <br>Example: `createCounter()` pattern                                         |
| 4  | **this**                   | Regular → dynamic; Arrow → lexical. <br>Example: `obj.arrow()` vs `obj.regular()`                                        |
| 5  | **Prevent runtime errors** | Defensive coding, `try/catch`, type checks, unit tests, ESLint                                                           |
| 6  | **Shallow vs Deep Copy**   | Shallow → top-level only; Deep → all nested objects copied. <br>Example: `{...obj}` vs `JSON.parse(JSON.stringify(obj))` |
| 7  | **Prototypal Inheritance** | Objects inherit from other objects. <br>Example: `Object.create(parent)`                                                 |
| 8  | **Rest & Spread**          | Spread → expand; Rest → collect. <br>Example: `[...arr]`, `function sum(...nums)`                                        |
| 9  | **Debounce vs Throttle**   | Debounce → wait; Throttle → limit.                                                                                       |
| 10 | **JSON.stringify / parse** | Convert object ↔ string for APIs / storage                                                                               |
| 11 | **ES6 Modules**            | `import/export` → code reuse, namespace protection, lazy loading                                                         |
| 12 | **Errors**                 | Syntax, Runtime, Logical → examples in code                                                                              |
| 13 | **for…in vs for…of**       | In → keys, Of → values                                                                                                   |
| 14 | **Optional chaining `?.`** | Safe access → `user.profile?.name`                                                                                       |
| 15 | **Unit testing (Jest)**    | Example: `sum.test.js` with `expect().toBe()`                                                                            |

---

