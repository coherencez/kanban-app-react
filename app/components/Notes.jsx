import React from 'react';

const notes = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    task: 'Learn React'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
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
