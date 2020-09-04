import initilizeRequest from "./request";

const fetchCart = () => {
  const request = initilizeRequest();

  return request.get("/cart")
};

const updateCart = (cart) => {
  const request = initilizeRequest();

  return request.put(
    "/cart",
    cart
  );
}

const addItemToCart = (item) => {
  const request = initilizeRequest();

  return request.patch(
    "/cart",
    item
  );
}

const setOrderAddress = (address) => {
  const request = initilizeRequest();

  return request.patch(
    "/cart/set_address",
    address
  );
}

const setOrderCard = (card) => {
  const request = initilizeRequest();

  return request.patch(
    "/cart/set_card",
    card
  );
}

const processOrder = () => {
  const request = initilizeRequest();

  return request.patch(
    "/cart/process_order"
  );
}

const removeItemFromCart = (line_item_id) => {
  const request = initilizeRequest();

  return request.delete(
    "/cart",
    { data: { line_item_id } }
  );
}

export {
  fetchCart,
  addItemToCart,
  removeItemFromCart,
  setOrderAddress,
  setOrderCard,
  processOrder,
  updateCart
};
