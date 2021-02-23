import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ id, keyTerm, definition, topic, onClick }) {
  return (
    <div>
      <h3 >{keyTerm}</h3>
      <p>{definition}</p>
      <p><em>{topic}</em></p>
      <button value={id} onClick={onClick}>Delete</button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  keyTerm: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
