import initilizeRequest from "./request";

const config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
  
  const fetchCards = () => {
  const request = initilizeRequest();

  return request.get("/cards")
};

const addCard = (card) => {
  const request = initilizeRequest();
  return request.post(
    "/cards",
    card,
    config
  );
}

const deleteCard = (card_id) => {
  const request = initilizeRequest();

  return request.delete(`/cards/${card_id}`);
}

export {
  fetchCards,
  addCard,
  deleteCard
};
