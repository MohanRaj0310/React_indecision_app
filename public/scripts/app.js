'use strict';

// let template = <h1>i'm from scripts/app.js</h1>

// let appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot)
// // console.log()
// document.write('jufruhf')
// console.log('dedede')
// console.log('dihei')

// let i = 90;

// const func = (x,y,r) => {
//   console.log('vji')
// }


// let webPageContent = <p>frkgitigtr</p>
// let domHTML = document.getElementById('id1')
// ReactDOM.render(webPageContent, domHTML)

// let template = <h1> Indecision app</h1><p
// >djirf/p</p>;

//dynamic template

var user = {
  name: 'mohan',
  age: 23,
  text: 'from object',
  str: '',
  boolVal: false,
  birthYear: function birthYear() {
    return this.age;
  },
  template: React.createElement(
    'h1',
    null,
    'temoal'
  ),
  func: function func() {
    return React.createElement(
      'h1',
      null,
      this.text
    );
  },
  options: [1, 2, 3],
  title: 'app Name',
  subTitle: 'crocodile story'

  // user.ageCalc();
  // let x;
};console.log(template); //undefined
console.log(c);
var c = 90;
var y = null;
var defined = undefined;
var str = '';
var val = 0;
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    user.birthYear()
  ),
  React.createElement(
    'p',
    null,
    false,
    ' ',
    undefined
  ),
  React.createElement(
    'p',
    null,
    user.birthYear()
  ),
  React.createElement(
    'p',
    null,
    null
  ),
  React.createElement(
    'p',
    null,
    user.birthYear()
  ),
  React.createElement(
    'p',
    null,
    user.birthYear()
  ),
  React.createElement(
    'p',
    null,
    user.boolVal
  ),
  React.createElement(
    'p',
    null,
    user.str
  ),
  React.createElement(
    'p',
    null,
    user.birthYear()
  ),
  React.createElement(
    'h2',
    null,
    undefined
  ),
  React.createElement(
    'h3',
    null,
    console.log('im from jsx')
  ),
  React.createElement(
    'p',
    null,
    undefined
  ),
  1 ? React.createElement(
    'p',
    null,
    'paragrapgh'
  ) : React.createElement(
    'h1',
    null,
    'dkooe'
  ),
  user.func(),
  user.template,
  React.createElement(
    'p',
    null,
    user.birthYear()
  ),
  React.createElement(
    'p',
    null,
    0
  ),
  y,
  defined,
  val,
  str,
  func(),
  user.age >= 18 && React.createElement(
    'p',
    null,
    user.age + 100
  ),
  user.subTitle && React.createElement(
    'p',
    null,
    user.subTitle
  ),
  user.options.length > 0 && React.createElement(
    'p',
    null,
    'here ARE OPTIONS : ',
    user.options
  ),
  user.unknown || React.createElement(
    'p',
    null,
    'user.known is not exist'
  )
);

var templateTwo = template;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
console.log(appRoot);
// console.log(x)

function func(x) {
  if (x) {
    return 0;
    console.log('deyded');
  }
}

console.log(func(null)); //undefined
console.log(null);

console.log(0 && 'heudueude');
console.log(1 && true);
console.log(1 || true);
console.log(user.age >= 25 && true);
console.log([1, 2, 3]);
var array = ['swdhu', 24333, 73434783478];
console.log(array);
