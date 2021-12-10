// Binary + operator

var a = {
  valueOf: function () {
    return "hello";
  },
};
var b = {
  valueOf: function () {
    return 3;
  },
};
var c = {
  valueOf: function () {
    return new Number(3);
  },
};
var d = {
  toString: function () {
    return 123;
  },
};
var e = {
  toString: function () {
    return new Number(3);
  },
};

// f isn't declared

null + undefined; // NaN
null + true; // 1
null + false; // 0
null + 3; // 3
null + NaN; // NaN
null + "hello"; // "nullhello"
null + a + b + c + d + e + f; // TypeError
undefined + true; // NaN
undefined + false; // NaN
undefined + 5; // NaN
undefined + NaN; // NaN
undefined + "hello"; // "undefinedhello"
undefined + a + b + c + d + e + f; // TypeError
true + false; // 1
true + 2; // 3
true + NaN; // NaN
true + "hello"; // "truehello"
true + a + b + c + d + e + f; // TypeError
false + 4; // 4
false + NaN; // NaN
false + "hello"; // "falsehello"
false + a + b + c + d + e + f; // TypeError
5 + 3; // 8
5 + NaN; // NaN
5 + "hello"; // "5hello"
5 + a + b + c + d + e + f; // TypeError
"hello" + NaN; // "helloNaN"
"hello" + a + b + c + d + e + f; // TypeError
