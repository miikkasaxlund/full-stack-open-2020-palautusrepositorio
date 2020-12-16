import React from 'react'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Filter <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Filter