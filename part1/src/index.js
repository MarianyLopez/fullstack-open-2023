import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div> 
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name="Fundamentals of React" exercises="10" />
      <Part name="Using props to pass data" exercises="7"/>
      <Part name="State of a component" exercises="14"/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course="Half Stack application development" />
      <Content />
      <Total exercises="31"/>
    </div> 
  ) 
}

ReactDOM.render(<App />, document.getElementById('root'))
