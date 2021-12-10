> ## ***Type Coercion for Reference Types***

**During this homework:**

**I have read the given materials, which are the following:**

- [*Type Coercion*](https://replit.com/@vrezhhovanisyan/3lessontype-coercion#index.js)
- [*Object to primitive conversion*](https://javascript.info/object-toprimitive)

**And done the task, which is the following:**

 Binary + operator

var a = {
  valueOf: function () {
    return "hello";
  },
}; <br>
var b = {
  valueOf: function () {
    return 3;
  },
}; <br>
var c = {
  valueOf: function () {
    return new Number(3);
  },
}; <br>
var d = {
  toString: function () {
    return 123;
  },
}; <br>
var e = {
  toString: function () {
    return new Number(3);
  },
}; <br>

// f isn't declared

null + undefined; // NaN <br>
null + true; // 1 <br>
null + false; // 0 <br>
null + 3; // 3 <br>
null + NaN; // NaN <br>
null + "hello"; // "nullhello" <br>
null + a + b + c + d + e + f; // TypeError <br>
undefined + true; // NaN <br>
undefined + false; // NaN <br>
undefined + 5; // NaN <br>
undefined + NaN; // NaN <br>
undefined + "hello"; // "undefinedhello" <br>
undefined + a + b + c + d + e + f; // TypeError <br>
true + false; // 1 <br>
true + 2; // 3 <br>
true + NaN; // NaN <br>
true + "hello"; // "truehello" <br>
true + a + b + c + d + e + f; // TypeError <br>
false + 4; // 4 <br>
false + NaN; // NaN <br>
false + "hello"; // "falsehello" <br>
false + a + b + c + d + e + f; // TypeError <br>
5 + 3; // 8 <br>
5 + NaN; // NaN <br>
5 + "hello"; // "5hello" <br>
5 + a + b + c + d + e + f; // TypeError <br>
"hello" + NaN; // "helloNaN" <br>
"hello" + a + b + c + d + e + f; // TypeError