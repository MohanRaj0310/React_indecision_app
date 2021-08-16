'use strict';

var sumArrow = function sumArrow(x, y) {
  return x + y;
};
console.log(sumArrow(90, 89));

var gloVar = 78;

var func = function func() {
  var numVal = 90;
  var valLet = 89;
  var gloVar = 37;
  console.log(gloVar);
  // i = 37
};
func();
// console.log(i)
// console.log(numVal)

function es5() {
  // i = 90
  // console.log(this)
  // i = 90
}

es5();
// console.log(this)

var getNameFirst = function getNameFirst(name) {
  return name.split(' ')[0];
};
console.log(getNameFirst('mohan raj'));
