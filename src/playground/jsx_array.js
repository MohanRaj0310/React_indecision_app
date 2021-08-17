let i = 0
const obj = {
  option: []
}
const numbers = [90, 89, 76, 63]
obj.option.push(numbers.map((num) => {
  return <p key={num}>{num + 100}</p>
}))

let ip = [];
const onSubmitForm = (e) => {
  i++;
  e.preventDefault();
  ip.push(e.target.elements.option.value);
  e.target.elements.option.value = ''
  rerender()
}
let appRoot = document.getElementById('app')

const rerender= () => {
  let template = (
    <div>
      <h1>JSX does support array</h1>
      {
        // [<p key= "sdsd">wkdik</p>,<p key = "eu">wjdwi</p>,<p key = "ej">wdiwd</p>]
        // [90, 90, 78, 'asuuuais', true]
      }
      {
        ip.map((item) => {
          return <p key={item}>{item} {i}</p>
        })
      }
      <form onSubmit={onSubmitForm}>
        <input type="text" name='option'/>
        <button>Add Things</button>
      </form>
    </div>
  );
  
 
  
  ReactDOM.render(template, appRoot)
}
rerender()