'use strict';

var template = React.createElement(
  'h1',
  null,
  'i\'m from scripts/app.js'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
