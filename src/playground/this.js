console.log('deidieide')

let y = 45
var x = 76
function func() {
  let x = 90
  var i = 90
  return function insFunc(){
    return function f3(){
      return this.x, y, x
    }
  }
}

// console.log(((func())))
let retVal = func()
// console.log(retVal())
let f3 = retVal()
console.log(f3())

//arrow

const arrow = () => {
  return this.x
}

console.log(arrow())

///object this

  /*
    1. function -> function......
    2.function -> arrow.........
    3.arrow -> arrow............
    4.arrow -> function.....
  */
var age = 67
let obj = {
  age: 21,
  f1(){
    console.log(this)
    console.log(this.age)
    return af1 = () => {
      console.log(this)
      console.log(this.age)
    }
    af1()
  },
  arrowFunc: () => {
    let that  = this
    console.log(this)
    console.log(this.age)
    return function (){
      console.log(this.age)
      console.log(that.age)
    }
  }
}

let retAf1 = obj.f1()
retAf1()

let retArrowFunc = obj.arrowFunc()
console.log(retArrowFunc())




