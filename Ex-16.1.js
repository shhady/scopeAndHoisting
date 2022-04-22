//! Instructions
//? Without running the code below, explain in your own words what the result
//? of each block of code will be and why.
//? If there are any faulty outputs, please write on how we can fix them.

//! Block 1

function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//* Answer: loggin (a) in line 9 will print undefined because it is declared yet not defined, the var a; will be  hoisted up, to fix this we need to move line 11 before line 9.
//* running foo() inside the console.log in line 10 will call it succesffully because it is a function declaration and will return and print 2.

//! Block 2

var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//* Answer: console.log in line 33 will print "Aurelio De Rosa", this is reffering to the object of the property prop.
//* test in line 34 will store the function declaration itself ==> ( function () {return this.fullName;} ) we didnt use () so its not executed
//* line 35 will print undefined because now the "this" keyword is outside the obj scope and is not poiting to anything.

//! Block 3

function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

//* Answer: line 49 will print undefined because we r reffering to (a) outside of it's function scope and it was declared with let.
//* to fix this remove the let keyword.
//* line 50 will print a number because b = 0 was defined however declared without var let or const which makes it global.

//! Block 4

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

//* Answer: both lines 61 and 65 will print number 2, because both functions will be hoisted up in the same order they r declared
//* and so the second funcC which has number 2 will override the first.

//! Block 5

function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e);

//* Answer: line 75 will run funcD1 and assign 1 to a global variable "d", and so line 76 will be able to access d and print 1.
//* however line 81 will print error e is not defined because we r printing it from outside the scope it was declared in using var in line 78.
//* to fix this remove the var keyword.

//! Block 6

function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

//* Answer: in line 92 we try to print f but f declaration will be hoisted up yet it wont be defined to 1, and it will print undefined.
//* however after we define it in  line 93, funcE() call will run and line 90 will print the value of f which is 1, because funcE
//* is inside the global scope and has access to variables outside, and it was called only after f was declared and defined.
//* to fix the undefined print in line 92 we need to put line 93 before 92
