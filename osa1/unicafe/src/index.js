import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = ({text, value, symbol = ""}) => <tr><td>{text}</td><td>{value} {symbol}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) return <p>No feedback given</p>
  const average = (good - bad) / all
  const positive = (100 * good) / all
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} symbol="%"/>
      </tbody>
    </table>
  )
}

// Button komponentti
const Button = props => <button onClick={props.onClick}>{props.title}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button title="Good" onClick={() => setGood(good + 1)}/>
        <Button title="Neutral" onClick={() => setNeutral(neutral + 1)}/>
        <Button title="Bad" onClick={() => setBad(bad + 1)}/>
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)