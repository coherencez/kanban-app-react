import React from 'react'

export default ({task, onDelete}) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>x</button>
    </div>
  )
}
