import React from 'react';
import uuid from 'uuid'

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default () => (
  // mix JS with JSX, return list of items for React to render
  <ul>{notes.map(note =>
    // key prop used to oder the list
    <li key={note.id}>{note.task}</li>
  )}</ul>
)
