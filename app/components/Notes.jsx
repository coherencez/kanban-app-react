import React from 'react';
import Note from './Note'


export default ({notes, ...props}) => (
  // mix JS with JSX, return list of items for React to render
  <ul>{notes.map(note =>
    // key prop used to oder the list
    <li key={note.id}><Note task={note.task} /></li>
  )}</ul>
)
