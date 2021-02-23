import React from 'react';
import PropTypes from 'prop-types';

function CardForm({ term, definition, topic, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="term"></label>
      <input 
        id="term" 
        type="text" 
        value={term} 
        onChange={onChange}/>
      
      <label htmlFor="definition"></label>
      <input 
        id="definition" 
        type="text" 
        value={definition} 
        onChange={onChange}/>

      <label htmlFor="topic"></label>
      <input 
        id="topic" 
        type="text" 
        value={topic} 
        onChange={onChange}/>

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

