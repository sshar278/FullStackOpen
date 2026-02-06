const Hello = (props) => {
  return (
    <div>
      <p>Welcome to React, {props.name}! You are {props.age} years old.</p>
    </div>
  )
}


const App = () => {
  console.log('Hello from component')
  return (
    <div>
      <p>Hello world</p>
      <Hello name = "Sid" age = "25" />  
    </div>
  )
}

export default App