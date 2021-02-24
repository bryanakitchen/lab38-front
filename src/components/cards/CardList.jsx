import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList({ cards, onClick }) {
  const cardElements = cards.map(card => (
    <p key={card.id}>
      <Card {...card} onClick={onClick} />
    </p>
  ));

  return (
    <div>
      {cardElements}
    </div>
  );
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    keyTerm: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default CardList;
