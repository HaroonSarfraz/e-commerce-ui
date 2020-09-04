import initilizeRequest from "./request";

const fetchCategories = () => {
  const request = initilizeRequest();

  return request.get("/categories")
};

export {
  fetchCategories
};
