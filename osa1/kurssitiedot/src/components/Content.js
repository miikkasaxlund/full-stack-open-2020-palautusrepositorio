import React from 'react'

const Part = props => {
  return <p>{props.name} {props.number}</p>
}

const Content = props => {
  return (
    <div>
      {props.parts.map((item, i) => {
        return <Part key={i} name={item.name} number={item.excercises} />
      })}
    </div>  
  )
}

export default Content