let count = 0
let addOne = () => {
  count++;
  counterApp()
}
let subOne = () => {
  count--;
  counterApp()
}
let reset = () => {
  count = 0;
  counterApp()
}

const f1 = () =>{
  console.log('dkoeod')
}

let appRoot = document.getElementById('app')

let counterApp = () => {
  let template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
  ReactDOM.render(template, appRoot)
}
  
counterApp();