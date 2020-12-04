import React from 'react'

const Total = props => {
  // Calculate the total number of excercises
  const total = props.parts.reduce((a, b) => a + (b['exercises'] || 0), 0)
  return (
    <p>Number of exercises {total}</p>  
  )
}

export default Total