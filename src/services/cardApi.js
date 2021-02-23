const URL = 'https://cryptic-waters-90298.herokuapp.com/api/v1/cards';

export const getAllCards = () => {
  return fetch(`${URL}`)
    .then(res => res.json());
};

export const createCard = ({ keyTerm, definition, topic }) => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ keyTerm, definition, topic })
  })
    .then(res => res.json());
};
