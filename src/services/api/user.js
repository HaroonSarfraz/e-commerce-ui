import initilizeRequest from "./request";

  const fetchCurrentUser = () => {
    const request = initilizeRequest();

    return request.get(`/users/current`)
  };

export {
  fetchCurrentUser
};
