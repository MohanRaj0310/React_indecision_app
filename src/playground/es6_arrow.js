const sumArrow = (x, y) => x + y
console.log(sumArrow(90, 89))

let gloVar = 78;

let func = ()=> {
  var numVal = 90
  let valLet = 89
  let gloVar = 37
  console.log(gloVar)
  // i = 37
}
func()
// console.log(i)
// console.log(numVal)

function es5 (){
  // i = 90
  // console.log(this)
  // i = 90
}

es5()
// console.log(this)

const getNameFirst = (name) => name.split(' ')[0];
console.log(getNameFirst('mohan raj'))