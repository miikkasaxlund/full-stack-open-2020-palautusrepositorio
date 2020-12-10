import React from 'react'

const Part = props => {
  return <p>{props.name} {props.number}</p>
}

const Content = props => {
  return (
    <div>
      {props.parts.map(item => {
        return <Part key={item.id} name={item.name} number={item.exercises} />
      })}
    </div>  
  )
}

export default Content