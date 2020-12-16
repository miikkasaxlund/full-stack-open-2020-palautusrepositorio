import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const phonebook = persons.filter(person => {
    const name = person.name.toLowerCase()
    return name.includes(filter.toLowerCase())
  })

  const handleFilterChange = event => {
    setFilter(event.target.value)
  }

  const handleNameChange = event => {
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPersons = [...persons]
      newPersons.push({
        name: newName,
        number: newNumber
      })
      setPersons(newPersons)
      setNewName('')      
    }
  }

  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      </div>
      <h3>Add new</h3>
      <PersonForm 
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons phonebook={phonebook} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
