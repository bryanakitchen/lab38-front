import React, { useState, useEffect } from 'react';
import CardForm from '../components/cards/CardForm';
import CardList from '../components/cards/CardList';
import { getAllCards } from '../services/cardApi';

function FlashCards() {
  const [cards, setCards] = useState([]);

  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    getAllCards()
      .then(cards => setCards(card => [...card, ...cards]));
  }, []);

  const handleChange = ({ target }) => {
  // need if statement

    // setTerm(target.value);
    
    // setDefinition(target.value);
    
  // setTopic(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <CardForm 
        term={term}
        definition={definition}
        topic={topic}
        onChange={handleChange}
        onSubmit={handleSubmit}  />
      <CardList cards={cards} />
    </>
  );
}

export default FlashCards;
