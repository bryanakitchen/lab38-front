import React, { useState, useEffect } from 'react';
import CardForm from '../components/cards/CardForm';
import CardList from '../components/cards/CardList';
import { createCard, getAllCards, deleteCard } from '../services/cardApi';

function FlashCards() {
  const [cards, setCards] = useState([]);

  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    getAllCards()
      .then(cards => setCards(cards));
  }, []);

  const handleChange = ({ target }) => {
    if(target.name === 'term')
      setTerm(target.value);
    if(target.name === 'definition')
      setDefinition(target.value);
    if(target.name === 'topic')
      setTopic(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createCard({ keyTerm: term, definition, topic })
      .then(response => setCards(cards => [...cards, response]));
  };

  const handleClick = ({ target }) => {
    deleteCard(target.value)
      .then(getAllCards)
      .then(cards => setCards(cards));
  };

  return (
    <>
      <CardForm 
        term={term}
        definition={definition}
        topic={topic}
        onChange={handleChange}
        onSubmit={handleSubmit}  />
      <CardList cards={cards} onClick={handleClick} />
    </>
  );
}

export default FlashCards;
