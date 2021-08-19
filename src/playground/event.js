class IndecisionApp extends React.Component {
  render (){
    // console.log(this)
    const title = 'Indecsion App'
    const subTitle = 'Practise makes Perfect'
    const options = ['Thing one', 'Thing two', 'Thing three']
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render (){
    // console.log(this.props)
    // console.log(this)
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h1>{this.props.subTitle}</h1>
    </div>
    )
  }
}

class Action extends React.Component {
  //es6 class only
  handleClick () {
    alert("😁😂")
  }
  render() {
    // console.log(this)
    // let val = 90
    // console.log('deidie')
    // const arrow = () => {
      // console.log('hii arrow in from one of components')
      // alert('deuhd')
    // arrow()
    // handleClick (){
    //   alert('i was clicked . what should i do')
    // }
    return (
      <div>
        <button onClick={this.handleClick}>What Should i do</button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('😂')
  }
  render (){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText = {option}/>)
        }
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render (){
    // console.log(this)
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}


class AddOption extends React.Component {
  handleAddOption (e){
    e.preventDefault();
    let option = e.target.elements.option.value.trim()
    if(option){
      alert('index has something')
      option += e.target.elements.option.value = ''
    }else {
      alert('please enter something')
    }
  }
  render (){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))