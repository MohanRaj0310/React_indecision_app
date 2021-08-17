let onMsg;
let obj = {
  dynamicVal: 'show Detail'
}
const detailMaker = () => {
  if(onMsg){
    obj.dynamicVal = 'show Detail'
    onMsg = ''
    rerender_app()
  } else {
    obj.dynamicVal = 'Hide Detail'
    onMsg = 'we are not here to show anything please hide' 
    rerender_app()
  }
}

let appRoot = document.getElementById('app')

let rerender_app = () => {
  let template = (
    <div>
      <h1>visibility Toggle</h1>
      <button onClick = {detailMaker}>{obj.dynamicVal}</button>
      <p>{onMsg}</p>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

rerender_app()