import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ keyTerm, definition, topic }) {
  return (
    <div>
      <h3>{keyTerm}</h3>
      <p>{definition}</p>
      <p><em>{topic}</em></p>
    </div>
  );
}

Card.propTypes = {
  keyTerm: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};
