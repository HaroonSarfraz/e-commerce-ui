import initilizeRequest from "./request";

const fetchAddresses = () => {
  const request = initilizeRequest();

  return request.get("/shipping_addresses")
};

const addAddress = (address) => {
  const request = initilizeRequest();

  return request.post(
    "/shipping_addresses",
    {
      shipping_address: address
    }
  );
}

const deleteAddress = (address_id) => {
  const request = initilizeRequest();

  return request.delete(`/shipping_addresses/${address_id}`);
}

export {
  fetchAddresses,
  addAddress,
  deleteAddress
};
