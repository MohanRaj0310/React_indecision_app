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
// var num = 34
// let user = {
//   age: 56,
//   cities: ['a1', 'a2', 'a3', 'a4'],
//   placesILived: function () {
//     let that = this
//       this.cities.forEach(function (city) {
//         console.log(city + that.age)
//     })
//   },
//   func: function () {
//     let num = 89
//     console.log(this)
//     return () =>{
//       return this.age// 56
//     }
//   },
//   arrow: () => {
//     let newVal = 67
//     console.log(this)
//     return function (){
//       return this.age//undefined
//     }
//   },
//   arrow1: () => {
//     return () => {
//       return this.age
//     }  
//   } 
// }
// user.placesILived()
// let recVal = user.func()
// console.log(recVal())
// let arrowVal = user.arrow()
// console.log(arrowVal())

// let i = user.arrow1()
// console.log(i())
// let array = [90, 89, 78, 92]

// array.forEach(function agedPerson (x){
//   x > 90 && console.log(x)
// })



/************************new way of declaring a functions into an object which is introduced by es6 */
let obj = {
  item : 1,
  item: 2,
  year: [1999, 1993, 2000, 2017],
  name1: ['mohan', 'dhilip', 'kavya', 'nithish'],
  sum(a, b){ /*************************************** */
    console.log(arguments)
  },
  arrow: () => {

  },
  /**************Map --> array method */
  mapFunc() {
    const mapVal = this.name1.map((xName) => {
      return `hii chellam ` + xName
      // let that = this
      // this.year.map(function (year){
      //   return that.year - 2021
      // })
     
    })
    return mapVal
  }
}

obj.sum(90, 78, 90)
let mapNewVal = obj.mapFunc();
console.log(mapNewVal)

let array = [8923, 456, 15, 78, 1, 0]
console.log(array.sort())

// sringGetPrinted('siouwuusws8')

// stringGetPrinted() {
//   console.log('swusw')// error***************************
// }

//challenge 

const tableForSpecific = {
  numbers: [90, 76, 45],
  multiplyBY: 2,
  multiplayer(){
    const ansMulti = this.numbers.map((num) => {
      return num * this.multiplyBY
    })
    return ansMulti
  },
  divider() {
    const div = this.numbers.forEach((num) => {
      return num/3
    })
    return div
  }
}

console.log(tableForSpecific.multiplayer())
console.log(tableForSpecific.divider())

let array1 = [90, 76, 89]

let ret = array1.forEach((x) => console.log(x))
console.log(ret)











