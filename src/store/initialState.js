const tokenValue = localStorage.getItem('access-token');

const initialState = {
  sample: {
    isLoading: true
  },
  reduxTokenAuth: {
    currentUser: {
      isLoading: tokenValue !== null && tokenValue !== "",
      isSignedIn: false,
      attributes: {
        id: null,
        name: null,
        email: null
      }
    },
  }
};

export default initialState;
