import React, { useState, useEffect } from 'react';
import CardList from '../components/cards/CardList';
import { getAllCards } from '../services/cardApi';

function FlashCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards()
      .then(cards => setCards(card => [...card, ...cards]));
  }, []);

  return (
    <>
      <CardList cards={cards} />
    </>
  );
}

export default FlashCards;
