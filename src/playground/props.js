class IndecisionApp extends React.Component {
  render (){
    console.log(this)
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
    console.log(this.props)
    console.log(this)
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h1>{this.props.subTitle}</h1>
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
  render (){
    // console.log(this)
    return (
      <div>
        AddOption here
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))