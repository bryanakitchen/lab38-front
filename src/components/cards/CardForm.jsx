import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

function CardForm({ term, definition, topic, onSubmit, onChange }) {
  return (
    <>
      <h2 className={ styles.header }>Flash Cards</h2>
      <h4 className={ styles.sub }><em>...in a flash!</em></h4>
      <form onSubmit={onSubmit} className={ styles.CardForm }>
        <label htmlFor="term">Key Term</label>
        <input 
          id="term" 
          type="text" 
          name="term"
          value={term} 
          onChange={onChange}/>
      
        <label htmlFor="definition">Definition</label>
        <input 
          id="definition" 
          type="text" 
          name="definition"
          value={definition} 
          onChange={onChange}/>

        <label htmlFor="topic">Topic</label>
        <input 
          id="topic" 
          type="text" 
          name="topic"
          value={topic} 
          onChange={onChange}/>

        <button>Add</button>
      </form>
    </>
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

