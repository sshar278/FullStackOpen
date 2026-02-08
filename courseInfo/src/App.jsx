// const Header = (props) => {
//   return <h1>{props.course.name}</h1>
// }

// const Part = ({ name, exercises }) => {
//   return (
//     <p>
//       {name} {exercises}
//     </p>
//   )
// }

// const Content = ({ parts }) => {
//   return (
//     <>
//       <Part name={parts[0].name} exercises={parts[0].exercises} />
//       <Part name={parts[1].name} exercises={parts[1].exercises} />
//       <Part name={parts[2].name} exercises={parts[2].exercises} />
//     </>
//   )
// }

// const Total = ({ parts }) => {
//   const sum = parts.reduce((s, p) => s + p.exercises, 0)
//   return <p>Number of exercises {sum}</p>
// }


// const App = () => {

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
  
//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }


// Compponents helper functions, destructuring


// const Hello = (props) => {

//   const name = props.name
//   const age = props.age

//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age
//   }

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }


import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

export default App