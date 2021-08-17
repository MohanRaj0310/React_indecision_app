'use strict';

// const sumArrow = (x, y) => x + y
// console.log(sumArrow(90, 89))

// let gloVar = 78;

// let func = ()=> {
//   var numVal = 90
//   let valLet = 89
//   let gloVar = 37
//   console.log(gloVar)
//   // i = 37
// }
// func()
// console.log(i)
// console.log(numVal)

// function es5 (){
// i = 90
// console.log(this)
// i = 90
// }

// es5()
// // console.log(this)

// const getNameFirst = (name) => name.split(' ')[0];
// console.log(getNameFirst('mohan raj'))

// // const isArgBound = (x, y, z) => {
// //   console.log(x + y)
// //   console.log(arguments)
// // }

// // isArgBound(90, 903, 78)

// function func23 (x, y, c){
//   console.log(arguments)
//   console.log(x + y)
//   console.log(arguments[arguments.length - 1])//90
// }

// func23(89, 90, 89, 90, 78, 90)

// let obj = {
//   name: 'djiede',
//   year: 2021,
//   call: function (){
//     console.log(this.name)
//     const that = this;
//     return function (){
//       console.log(that.name)
//     }
//   }
// }

// let returnVal = obj.call();
// console.log(returnVal())
// console.log(this)

// function func23(){
//   console.log(this)
//   console.log(this == window)//true
//   let obj = {
//     name: 'mohanraj',
//     year: 12444,
//     method: function (){
//       console.log(this.name)
//       console.log(this)
//       let that = this
//       let obj = {
//         // name: 'rajkumar',
//         // year: 1993,
//         methods: function (){
//           console.log(that.name)
//         }
//       }
//       obj.methods()
//     },
//   }
//   obj.method()
// }


// func23()
// console.log(obj)

// var x = 90;
// console.log(this.x)//90

// this.x = 89;
// console.log(x)//89

// let y = 67
// console.log(this.y)//undefined
// this.y = 45
// console.log(y)//67

// const square = () => {
//   console.log(this)
// }

// square()
// let age = 18

// let obj = {
//   age: 21,
//   arrowFunc: () => {
//     console.log(this.age)
//   },
//   normalFunc: function () {
//     console.log(this.age)
//     function inner () {
//       console.log('siejd', this.age)
//       return this.age
//     }
//     console.log(inner())
//   }
// }

// obj.arrowFunc()
// let retExp = obj.normalFunc()
// console.log(retExp())//undefined

// {
//   console.log('dheu')
// }
// var str = 'string'

// function f1 (){
//   console.log(this)
//   let age = 78
//   var val = 45
//   var val2 = 76334
//   let val3 = 73783829929;
//   function f2() {
//     console.log(this)
//     console.log(age)//undefined
//     console.log(val)
//     func()
//     function func (){
//       console.log(val2)
//       console.log(val3)
//       console.log(this.str)
//       return val3
//     }
//   }
//   return f2
// }

// let val = f1()
// console.log(val())

// var str = 'string'

// const f1 = () => {
//   console.log(this)
//   let age = 78
//   var val = 45
//   var val2 = 76334
//   let val3 = 73783829929;
//   let f2 = () => {
//     console.log(this)
//     console.log(age)//undefined
//     console.log(val)
//     // func()
//     let func = () => {
//       console.log(val2)
//       console.log(val3)
//       console.log(this.str)
//       return val3
//     }
//     func()
//   }
//   return f2
// }

// let val = f1()
// console.log(val()

// let namev0 = 'raj'
// var nameV1 = 'kavya'

// let obj = {
//   name: 'mohanraj',
//   year: 2021,
//   func: () => {
//     // this.year = 8892;
//     let that = this;
//     console.log(this)//window
//     console.log(this.year)//undefined
//     console.log(this.nameV1)//kavya
//     console.log(this.namev0)//undefined
//     console.log(this.dkeiide)//undefined
//     function retFunc (){
//       let that = this
//       return function (){
//         return that.year
//       }
//     }
//     // return retFunc
//   }

// }
// let reCeiver = obj.func()
// console.log(reCeiver())//undefined
// console.log(obj)

/************************************************Foreach */
var num = 34;
var user = {
  age: 56,
  cities: ['a1', 'a2', 'a3', 'a4'],
  placesILived: function placesILived() {
    var that = this;
    this.cities.forEach(function (city) {
      console.log(city + that.age);
    });
  },
  func: function func() {
    var _this = this;

    var num = 89;
    console.log(this);
    return function () {
      return _this.age; // 56
    };
  },
  arrow: function arrow() {
    var newVal = 67;
    console.log(undefined);
    return function () {
      return this.age; //undefined
    };
  },
  arrow1: function arrow1() {
    return function () {
      return undefined.age;
    };
  }
};
user.placesILived();
var recVal = user.func();
console.log(recVal());
var arrowVal = user.arrow();
console.log(arrowVal());

var i = user.arrow1();
console.log(i());

// let array = [90, 89, 78, 92]

// array.forEach(function agedPerson (x){
//   x > 90 && console.log(x)
// })
