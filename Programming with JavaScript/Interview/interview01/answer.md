# 📌 Day 01 — Interview practice Question Solutions (Frontend + Full Stack)

## ✅ Solutions of Coding Questions 

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


| Q# | Topic                        | Model Answer / Example                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1  | **Microtasks vs Macrotasks** | **Macrotasks:** Scheduled by functions like `setTimeout`, `setInterval`, I/O.<br>**Microtasks:** Scheduled by Promises, `queueMicrotask`, `MutationObserver`.<br>**Event loop order:** After each macrotask, the event loop runs *all* microtasks before rendering.<br>**Example:**<br>```js<br>setTimeout(() => console.log('macrotask'), 0);<br>Promise.resolve().then(() => console.log('microtask'));<br>console.log('sync');<br>```<br>**Output:**<br>`sync` → `microtask` → `macrotask` |
| 2  | **var vs let vs const**      | - `var` → function-scoped, hoisted & initialized with `undefined`, can be redeclared and updated.<br>- `let` → block-scoped, hoisted but in TDZ (Temporal Dead Zone), can be updated but not redeclared in same scope.<br>- `const` → block-scoped, must be initialized, cannot be updated or redeclared.<br>⚡ **Tip:** Const objects can have their **properties mutated**; only the **binding** is constant.                                                               |
| 3  | **Closures**                 | Inner function remembers outer variables.<br>**Example:** Counter pattern:<br>```js<br>function createCounter() {<br> let count = 0;<br> return () => ++count;<br>}<br>const c = createCounter();<br>c(); // 1<br>c(); // 2<br>```                                                                                                                                                                                                                 |
| 4  | **this**                     | - **Regular functions:** `this` depends on *how* the function is called (dynamic).<br>- **Arrow functions:** `this` is *lexically bound* (inherits from parent).<br>**Example:**<br>```js<br>const obj = {<br> regular() { console.log(this); },<br> arrow: () => console.log(this)<br>};<br>obj.regular(); // obj<br>obj.arrow(); // global/undefined<br>```                                                                                              |
| 5  | **Prevent runtime errors**   | - Use **defensive coding** (e.g., null checks)<br>- Apply `try/catch` for error handling<br>- Add **type checks** and validation<br>- Use **unit tests** to catch regressions early<br>- Use **linters** like ESLint for consistent code                                                                                                                                                                                                       |
| 6  | **Shallow vs Deep Copy**     | - **Shallow Copy:** Copies top-level only.<br>Example: `{...obj}`.<br>- **Deep Copy:** Copies all nested objects.<br>Example: `JSON.parse(JSON.stringify(obj))`.<br>⚠️ Note: Deep copy using JSON breaks functions & special types.                                                                                                                                                                                                           |
| 7  | **Prototypal Inheritance**   | Objects inherit from other objects via their prototype chain.<br>**Example:**<br>```js<br>const parent = { greet() { console.log("hi"); } };<br>const child = Object.create(parent);<br>child.greet(); // "hi"<br>```                                                                                                                                                                                                                             |
| 8  | **Rest & Spread**            | - **Spread:** Expands elements → `const arr2 = [...arr1]`<br>- **Rest:** Collects remaining arguments →<br>```js<br>function sum(...nums){ return nums.reduce((a,b)=>a+b) }<br>```                                                                                                                                                                                                                                                              |
| 9  | **Debounce vs Throttle**     | - **Debounce:** Delays execution until after inactivity period (e.g. search bar).<br>- **Throttle:** Limits execution to once every fixed time (e.g. scroll handler).                                                                                                                                                                                                                                                                         |
| 10 | **JSON.stringify / parse**   | - `JSON.stringify(obj)` → object → string (send data via API)<br>- `JSON.parse(str)` → string → object (use response).<br>Useful for localStorage, deep cloning (basic), and serializing data.                                                                                                                                                                                                                                                 |
| 11 | **ES6 Modules**              | - Use `import` / `export` for **code reuse**, **namespace protection**, and **lazy loading**.<br>**Example:**<br>`export const x = 10;` → `import { x } from './file.js'`                                                                                                                                                                                                                                                                      |
| 12 | **Types of Errors**          | - **Syntax Error:** Detected at parse time, e.g. `if ( {`<br>- **Runtime Error:** Code compiles but fails during execution, e.g. `null.foo`.<br>- **Logical Error:** No crash, but incorrect output due to flawed logic.                                                                                                                                                                                                                     |
| 13 | **for…in vs for…of**         | - `for…in` → Iterates **keys** (enumerable properties).<br>- `for…of` → Iterates **values** (iterables like arrays, strings).<br>**Example:**<br>`for (let k in obj)` vs `for (let v of arr)`                                                                                                                                                                                                                                                 |
| 14 | **Optional chaining `?.`**   | - Safe access to nested properties without errors.<br>**Example:**<br>`const name = user.profile?.name;`<br>Returns `undefined` if `profile` doesn’t exist, instead of throwing error.                                                                                                                                                                                                                                                        |
| 15 | **Unit testing (Jest)**      | - Write tests in `*.test.js`.<br>**Example:**<br>```js<br>test('adds numbers', () => {<br>  expect(sum(2, 3)).toBe(5);<br>});<br>```<br>Use Jest matchers like `.toBe()`, `.toEqual()`, `.toThrow()` etc.                                                                                                                                                                                                                                                                              |

---

## Detailed Explanation of Technical Questions 

 ### **Q1: Explain Microtasks vs Macrotasks**

Macrotasks → Scheduled by functions like setTimeout, setInterval, I/O.

Microtasks → Scheduled by Promises, queueMicrotask, MutationObservers.

Event loop order: after each macrotask, the event loop runs all microtasks before rendering.

Example:

setTimeout(() => console.log('macrotask'), 0);
Promise.resolve().then(() => console.log('microtask'));
console.log('sync');


Output:

sync
microtask
macrotask

 ### **Q2: Explain var vs let vs cons**

You got the main idea but your explanation was scattered.

👉 Clean Version:

var → function-scoped, hoisted, initialized with undefined. Can be redeclared & updated.

let → block-scoped, hoisted but in Temporal Dead Zone. Can be updated, not redeclared in same scope.

const → block-scoped, must be initialized, cannot be updated or redeclared.

Extra Tip: Even const objects can have their properties mutated (only binding is constant).


### **Q3: Explain Closures with examples**

**Teacher style:**
“Imagine tumne ek box lock kiya aur uske andar kuch rakha. Bahar se tum us box ka content direct nahi dekh sakte. Lekin tum ek chhota sa chabi (function) bana do jo access de, aur tum woh chabi baar-baar use kar sakte ho — ye hi JS me **closure** hai.”

* **Definition:**
  Closure is a **function + lexical scope**. Matlab, inner function apne outer function ke variables ko yaad rakhta hai **even after outer function finish ho gaya**.

* **Example 1:** Private counter

```js
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function() { count++; return count; },
    decrement: function() { count--; return count; },
    getValue: function() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getValue());  // 2
```

✅ Yahan inner functions `count` variable ko yaad rakhe hue hai. Ye **closure** hai.

* **Example 2:** Multiplier

```js
function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

💡 **Tip:** Closure = “Inner function remembers outer variables forever.”

---

### **Q4: How is `this` handled differently?**

* **Regular function:** `this` depends on **how function is called**.

```js
function show() { console.log(this); }
show(); // window/global object
```

* **Arrow function:** `this` is **lexical**, matlab outer function ka `this` lega.

```js
const obj = {
  name: "Hasan",
  arrow: () => console.log(this.name),
  regular: function() { console.log(this.name); }
};
obj.arrow();   // undefined (lexical `this` is window)
obj.regular(); // Hasan
```

* **Teacher trick:** Arrow function me `this` kabhi change nahi hota, regular function me **call site se decide hota hai**.

---

### **Q5: How to prevent runtime errors in large codebase?**

1. **Defensive programming:** Check values before use.

```js
if(user && user.name) console.log(user.name);
```

2. **Try/catch blocks**

```js
try { riskyFunc(); } 
catch(e) { console.error("Error:", e.message); }
```

3. **Type checking**

```js
if(Array.isArray(arr)) arr.map(...);
```

4. **Unit tests & TDD** → bugs detect early
5. **Linting & ESLint** → syntax mistakes

---

### **Q6: Shallow vs Deep Copy**

* **Shallow copy:** Sirf **top-level** values copy hote hai, nested objects ka reference copy hota hai.

```js
let obj1 = {a: 1, b: {c: 2}};
let obj2 = {...obj1}; 
obj2.b.c = 99;
console.log(obj1.b.c); // 99 → shallow copy
```

* **Deep copy:** Sab nested values bhi alag copy ho jaaye.

```js
let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.b.c = 0;
console.log(obj1.b.c); // 99 → deep copy
```

---

### **Q7: Prototypal Inheritance**

* **Teacher style:** JS me object can inherit properties from **another object** using prototype. Matlab ek object ke methods/datas doosre object me automatically available ho jaate.

```js
const parent = { greet: function(){ console.log("Hello"); }};
const child = Object.create(parent);
child.greet(); // Hello
```

* **Tip:** JS me **class ke peeche bhi prototype hi hota hai.**

---

### **Q8: Rest & Spread**

* **Spread (`...`)** → **expand** array/object

```js
let arr = [1,2,3];
let newArr = [...arr, 4,5]; // [1,2,3,4,5]
```

* **Rest (`...`)** → **collect remaining values** as array

```js
function sum(...numbers){
  return numbers.reduce((a,b)=>a+b,0);
}
console.log(sum(1,2,3,4)); // 10
```

---

### **Q9: Debouncing vs Throttling**

* **Debounce:** Wait until user **stops action** for X ms → run function once
  Example: Search input
* **Throttle:** Run **maximum once every X ms** → Scroll or Resize events

---

### **Q10: JSON.stringify / JSON.parse**

* **Use case:** Server → JS object → client / local storage

```js
const obj = {name:"Hasan"};
const str = JSON.stringify(obj); // convert to string
const parsed = JSON.parse(str);   // back to object
```

---

### **Q11: Advantages of Modules (ES6)**

1. **Code reuse** → `import/export`
2. **Namespace protection** → global pollution avoid
3. **Lazy loading** → performance optimize

```js
// add.js
export function add(a,b){ return a+b; }
// main.js
import { add } from './add.js';
console.log(add(2,3));
```

---

### **Q12: Syntax, Runtime, Logical Errors**

* **Syntax:** JS cannot parse → compile error → immediate fix

```js
if(true { console.log("hi"); } // syntax
```

* **Runtime:** JS can parse but error during execution

```js
undefinedVar + 2; // runtime
```

* **Logical:** No error, wrong output

```js
2+2==5? // logical
```

---

### **Q13: for...in vs for...of**

* **for...in:** iterate **keys/properties** of object

```js
const obj = {a:1,b:2};
for(let key in obj) console.log(key); // a,b
```

* **for...of:** iterate **values** of array or iterable

```js
const arr = [10,20];
for(let val of arr) console.log(val); // 10,20
```

---

### **Q14: Optional Chaining `?.`**

* **Purpose:** Avoid `Cannot read property of undefined`

```js
const user = {profile: {name:"Hasan"}};
console.log(user.profile?.name); // Hasan
console.log(user.address?.city); // undefined (no error)
```

---

### **Q15: Unit Testing with Jest**

* **Example:** Test a sum function

```js
// sum.js
function sum(a,b){ return a+b; }
module.exports = sum;

// sum.test.js
const sum = require('./sum');
test('adds 1+2=3', () => {
  expect(sum(1,2)).toBe(3);
});
```

