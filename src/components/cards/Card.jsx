import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

export default function Card({ id, keyTerm, definition, topic, onClick }) {
  return (
    <details className={ styles.Card }>
      <summary>{keyTerm}</summary>
      <p>{definition}</p>
      <p><em>{topic}</em></p>
      <button value={id} onClick={onClick}>Delete</button>
    </details>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  keyTerm: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
