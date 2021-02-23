import React from 'react';
import PropTypes from 'prop-types';

function CardForm({ term, definition, topic, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="term">Key Term</label>
      <input 
        id="term" 
        type="text" 
        name="term"
        value={term} 
        onChange={onChange}/><br/>
      
      <label htmlFor="definition">Definition</label>
      <input 
        id="definition" 
        type="text" 
        name="definition"
        value={definition} 
        onChange={onChange}/><br/>

      <label htmlFor="topic">Topic</label>
      <input 
        id="topic" 
        type="text" 
        name="topic"
        value={topic} 
        onChange={onChange}/><br/>

      <button>Add</button>
    </form>
  );
}

CardForm.propTypes = {
  term: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CardForm;

