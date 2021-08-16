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

let user = {
  name: 'mohan',
  age: 23,
  text: 'from object',
  str: '',
  boolVal : false,
  birthYear : function (){
    return this.age;
  },
  template : <h1>temoal</h1>,
  func: function (){
    return <h1>{this.text}</h1>
  },
  options: [1, 2, 3],
  title: 'app Name',
  subTitle: 'crocodile story'
}
  


// user.ageCalc();
// let x;
console.log(template)//undefined
console.log(c)
let c = 90;
let y = null
let defined = undefined
let str = ''
let val = 0
var template = (<div>
  <h1>{user.name}</h1>
  <p>{user.birthYear()}</p>
  <p>{false} {undefined}</p>
  
  <p>{user.birthYear()}</p>
  <p>{null}</p>
  <p>{user.birthYear()}</p>
  <p>{user.birthYear()}</p>
  <p>{user.boolVal}</p>
  <p>{user.str}</p>
  <p>{user.birthYear()}</p>
  <h2>{this}</h2>
  <h3>{console.log('im from jsx')}</h3>
  <p>{undefined}</p>
  {1?<p>paragrapgh</p>:<h1>dkooe</h1>}
  {user.func()}
  {user.template}
  <p>{user.birthYear()}</p>
  <p>{0}</p>
  {y}
  {defined}
  {val}
  {str}
  {func()}
  {user.age >= 18 && <p>{user.age + 100}</p>}
  {user.subTitle && <p>{user.subTitle}</p>}
  {user.options.length > 0 && <p>here ARE OPTIONS : {user.options}</p>}
  {user.unknown || <p>user.known is not exist</p>}
</div>);

let templateTwo = template;
let appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
console.log(appRoot)
// console.log(x)

function func (x){
  if(x){
    return 0
    console.log('deyded')
  }
}

console.log(func(null))//undefined
console.log(null)

console.log(0 && 'heudueude')
console.log(1 && true)
console.log(1 || true)
console.log(user.age >= 25 && true)
console.log([1, 2, 3])
let array = ['swdhu',24333,73434783478]
console.log(array)