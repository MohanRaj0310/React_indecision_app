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

// let user = {
//   name: 'mohan',
//   age: 23,
//   text: 'from object',
//   str: '',
//   boolVal : false,
//   birthYear : function (){
//     return this.age;
//   },
//   template : <h1>temoal</h1>,
//   func: function (){
//     return <h1>{this.text}</h1>
//   },
//   options: [1, 2, 3],
//   title: 'app Name',
//   subTitle: 'crocodile story'
// }
  


// // user.ageCalc();
// // let x;
// console.log(template)//undefined
// console.log(c)
// let c = 90;
// let y = null
// let defined = undefined
// let str = ''
// let val = 0
// var template = (<div>
//   <h1>{user.name}</h1>
//   <p>{user.birthYear()}</p>
//   <p>{false} {undefined}</p>
  
//   <p>{user.birthYear()}</p>
//   <p>{null}</p>
//   <p>{user.birthYear()}</p>
//   <p>{user.birthYear()}</p>
//   <p>{user.boolVal}</p>
//   <p>{user.str}</p>
//   <p>{user.birthYear()}</p>
//   <h2>{this}</h2>
//   <h3>{console.log('im from jsx')}</h3>
//   <p>{undefined}</p>
//   {1?<p>paragrapgh</p>:<h1>dkooe</h1>}
//   {user.func()}
//   {user.template}
//   <p>{user.birthYear()}</p>
//   <p>{0}</p>
//   {y}
//   {defined}
//   {val}
//   {str}
//   {func()}
//   {user.age >= 18 && <p>{user.age + 100}</p>}
//   {user.subTitle && <p>{user.subTitle}</p>}
//   {user.options.length > 0 && <p>here ARE OPTIONS : {user.options}</p>}
//   {user.unknown || <p>user.known is not exist</p>}
// </div>);

// let templateTwo = template;
// let appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot)
// console.log(appRoot)
// // console.log(x)

// function func (x){
//   if(x){
//     return 0
//     console.log('deyded')
//   }
// }

// console.log(func(null))//undefined
// console.log(null)

// console.log(0 && 'heudueude')
// console.log(1 && true)
// console.log(1 || true)
// console.log(user.age >= 25 && true)
// console.log([1, 2, 3])
// let array = ['swdhu',24333,73434783478]
// console.log(array)
// console.log(Array)

// let x;
// const app = {
//   options: []
// }

// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
//   if (option){
//     app.options.push(option)
//     e.target.elements.option.value = '';
//   }
//   renderFunc()
// }

// let appRoot = document.getElementById('app')

// const renderFunc = () => {
//   let template = (
//     <div>
//       <h1>form subMission</h1>
//       <form onSubmit = {onFormSubmit}>
//         <input type="text" name="option"/>
//         <button>Add Option</button>
//       </form>
//       <p>{app.options.length}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot)
// }
// // console.log(x)
// renderFunc();
/***************************jsx arrays */

// let i = 0
// const obj = {
//   option: []
// }
// const numbers = [90, 89, 76, 63]
// obj.option.push(numbers.map((num) => {
//   return <p key={num}>{num + 100}</p>
// }))

// let ip = [];
// const onSubmitForm = (e) => {
//   i++;
//   e.preventDefault();
//   ip.push(e.target.elements.option.value);
//   e.target.elements.option.value = ''
//   rerender()
// }
// let appRoot = document.getElementById('app')

// const rerender= () => {
//   let template = (
//     <div>
//       <h1>JSX does support array</h1>
//       {
//         // [<p key= "sdsd">wkdik</p>,<p key = "eu">wjdwi</p>,<p key = "ej">wdiwd</p>]
//         // [90, 90, 78, 'asuuuais', true]
//       }
//       {
//         ip.map((item) => {
//           return <p key={item}>{item} {i}</p>
//         })
//       }
//       <form onSubmit={onSubmitForm}>
//         <input type="text" name='option'/>
//         <button>Add Things</button>
//       </form>
//     </div>
//   );
  
 
  
//   ReactDOM.render(template, appRoot)
// }
// rerender()

// console.log('App.js is running!');

// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: []
// };

// const onFormSubmit = (e) => {
//   e.preventDefault();

//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   }
// };

// const onRemoveAll = () => {
//   app.options = [];
//   render();
// };

// const onMakeDecision = () => {
//   app.options.length == 0 && alert('please add item in your pocket')
//   if (app.options.length){
//     alert(app.options[(Math.floor(Math.random() * app.options.length))])
//   }
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//       <p>{app.options.length}</p>
//       <button onClick={onRemoveAll}>Remove All</button>
//       <ol>
//         {
//           app.options.map((option) => <li key={option}>{option}</li>)
//         }
//       </ol>
      
//       <button disabled={app.options.length === 0 && true} onClick = {onMakeDecision}>Suggestion</button>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
// // alert([])

/***********************************visibility toggle */
// let onMsg;
// let obj = {
//   dynamicVal: 'show Detail'
// }
// const detailMaker = () => {
//   if(onMsg){
//     obj.dynamicVal = 'show Detail'
//     onMsg = ''
//     rerender_app()
//   } else {
//     obj.dynamicVal = 'Hide Detail'
//     onMsg = 'we are not here to show anything please hide' 
//     rerender_app()
//   }
// }

// let appRoot = document.getElementById('app')

// let rerender_app = () => {
//   let template = (
//     <div>
//       <h1>visibility Toggle</h1>
//       <button onClick = {detailMaker}>{obj.dynamicVal}</button>
//       <p>{onMsg}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot)
// }

// rerender_app()

/****************practice session */
/*
var x = 90

let rerender_app = () => {
  let template = (
    <div>
      <h1>visibility Toggle</h1>
      <button>press Here</button>
      <p>{x} {this}</p>
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'))
}

rerender_app()
*/
class IndecisionApp extends React.Component {
  render (){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render (){
    return (
      <div>
      <h1>Indecision App</h1>
    </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should i do</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render (){
    return (
      <div>
        1.we can consume lot but practise is from consume. if you do that, you won't be forgot anything
      </div>
    )
  }
}

class AddOption extends React.Component {
  render (){
    return (
      <div>
        2.we can consume lot but practise is from consume. if you do that, you won't be forgot anything
      </div>
    )
  }
}

let jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>  
)

ReactDOM.render(jsx, document.getElementById('app'))