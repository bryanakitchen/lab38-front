const URL = 'https://cryptic-waters-90298.herokuapp.com/api/v1/cards';

export const getAllCards = () => {
  return fetch(`${URL}`)
    .then(res => res.json());
};

export const createCard = (dataObject) => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObject)
  })
    .then(res => res.json());
};
