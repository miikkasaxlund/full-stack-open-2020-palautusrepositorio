import React from 'react'

const Persons = ({ phonebook }) => {
  return (
    <div>
      {phonebook.map((person) => {
        return <p key={person.name}>{person.name} {person.number}</p>
      })}      
    </div>
  )
}

export default Persons