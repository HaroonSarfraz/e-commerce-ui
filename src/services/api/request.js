import axios from 'axios';
import authHeaders from "./authHeaders";
import { BASE_URL } from "../../constants";

// We need to make it a function because sometimes this piece of code runs
// before the localStorage is updated after authentication. So it should be a function
// getting values at run time rather than a const getting initial value on compile time
export default () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: authHeaders()
  });

  return instance;
}
