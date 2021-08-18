//class like blueprint
//so we can make more class based on blueprint
//each class may be havin unique things where instances comes in and play there
//we should have constructor function like class when you having instances. constructor will be called when you create instance

// var name = 'dev'
// let obj = {
//   name: 'mohan',
//   // f1()// error not like constructor
//   // this.func1()//error
//   f1(){
//     // func1()//is not defined
//     return function f2(){
//       console.log(this.name)
//     }
//   }
// }

// let val = obj.f1()

// val.func1 = function (){
//   console.log(1)
// }
// console.log(val())

let offVal = 90
class Person {
  constructor (name = "users yet to be typed"){
    console.log(this.newArg)//undefined
    this.getItem('oops')
    // this.es5(//is not funcion)
    console.log(this.newArg)//oops
    this.name = name
    console.log(`i'm ${this.name}`)
    console.log(name)
    console.log(this.offVal)//undefined
    console.log(offVal)
    console.log(this)
    this.arrowFunc = () => {
      console.log(this)
    }
    this.es5 = function (){
      console.log(this)
      f3()
      function f3() {
        console.log(this)
      }
      const f55 = () => {
        console.log(this)
        f56()
        function f56() {
          console.log(this)
        }
      }
      f55()
    }
    // newMethodFromout()
  }
  getItem (a1){
    this.newArg = a1
    console.log('dejojodeeeeeeee')
  }
}

const mohan = new Person('mohanraj');
console.log(mohan)
mohan.arrowFunc()
let es5 = mohan.es5()
mohan.newMethodFromout = () => 'i was created from outside of the this object'

const name2 = new Person('sivaPerumal')
const name3 = new Person()

// class Letters{
//   method(_for){
//     this.for = _for
//     console.log(this)
//     console.log(arguments)
//     return 'hiii' + this.for
//   }
// }
// const a = new Letters()
// console.log(a.method('apple'))
// console.log(Person())//es6-class.js:14 Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
// console.log(typeof Person)//function
// Person.constructor()//no response

/*****************************Testing default arguments */

// function func(arg1 = "aw!"){
//   console.log(arguments)//......
//   console.log(arg1)//honda//aw
//   let maker = arg1 || "oops"
//   console.log(maker)
//   return function (arg) {
//     // console.log(maker)//can't acces before. 
//     console.log(arg)//undefined
//     let maker = arg || 'you need to write something'
//     console.log(maker)
//   }
// }

// let anyFunc = func('honda', 23)
// anyFunc()
// func()//
test()
// console.log(x)
function test(){
  let i = 90;
  j = 67;
  var x = 67
  console.log('sdedue')
}