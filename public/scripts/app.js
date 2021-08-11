// console.log("hii");

// function func() {
//   console.log(this);
// }

// func();

// const arrowFunc = () => console.log(this);

// console.log(arrowFunc());

// const obj = {
//   name: "mkei",
//   func: function () {
//     return function () {
//       console.log(this);
//     };
//   },
// };

// let test = obj.func();
// console.log(test());

// function func2() {
//   function func() {
//     console.log(this);
//   }
//   func();
//   return () => {
//     console.log(this);
//   };
// }
// let test1 = func2();
// console.log(test1());

// if ("k") {
//   console.log(this);
// }

// function func3() {
//   console.log(this);
//   // 
//   return function (){
//     console.log(this)
//   }
// }
// let funcTest = func3();
// funcTest()

//Arrow this function
// let arrow = () => {
//   return this
// }
// console.log(arrow())

// function func(){
//   let  a = 90
//   return function func (){
//     return function nestFunc (){
//       return a
//     }
//   }
// }
// let test = func()
// let test1 = test()
// console.log(test1())

let template = React.createElement(
  'p',
  {
    id: "connector",
  },
  "successfully created p tag"
);
  
let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
console.log(template)
console.log(appRoot)

// try another one
let templateh1 = React.createElement(
  'h1',
  {
    id: 'header'
  },
  'i was created by react .i\'m from app.js'
)
ReactDOM.render(templateh1,appRoot)///***********************created a new element over in client side javascript when the same div already has an element ? it is going to be overriding the existing one.**/

/*
let templateh1 = React.createElement(
  "div",
  {
    id: "header"
  }
)
ReactDOM.render(templateh1)// react-dom.js:17859 Uncaught Invariant Violation: _registerComponent(...): Target container is not a DOM element.
*/

//testing typeof react subsidary
// console.log(typeof React.createElement())//object//react.js:3528 Warning: React.createElement: type is invalid -- expected a string (for built-in comp..
// console.log(typeof ReactDOM.render())//Uncaught Invariant Violation: ReactDOM.render(): Invalid component element.....
// console.log(typeof React.createElement())
// console.log(ReactDOM.render())////Uncaught Invariant Violation: ReactDOM.render(): Invalid component element.....
// console.log(ReactDOM.render())//Uncaught Invariant Violation
console.log(React.createElement)
console.log(ReactDOM.render)

