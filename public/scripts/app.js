'use strict';

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
var visibility = true;

var toggle_Visibility = function toggle_Visibility() {
  visibility = !visibility;
  rerender();
};

var rerender = function rerender() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle_Visibility },
      visibility ? 'show detail' : 'Hide detail'
    ),
    visibility || React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'some content to be shown'
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};

rerender();
