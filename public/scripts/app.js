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
let arrow = () => {
  return this
}
console.log(arrow())

function func(){
  let  a = 90
  return function func (){
    return function nestFunc (){
      return a
    }
  }
}
let test = func()
let test1 = test()
console.log(test1())