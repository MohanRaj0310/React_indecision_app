const app = {
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option){
    app.options.push(option)
    e.target.elements.option.value = '';
  }
  renderFunc()
}

let appRoot = document.getElementById('app')

const renderFunc = () => {
  let template = (
    <div>
      <h1>form subMission</h1>
      <form onSubmit = {onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      <p>{app.options.length}</p>
    </div>
  );
  ReactDOM.render(template, appRoot)
}
// console.log(x)
renderFunc();