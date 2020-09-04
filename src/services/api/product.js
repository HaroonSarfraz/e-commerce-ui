import initilizeRequest from "./request";

const fetchProducts = (category_id = null, search_keyword = null) => {
  const request = initilizeRequest();

  return request.get(`/products?category_id=${category_id}&search_keyword=${search_keyword}`)
};

export {
  fetchProducts
};
