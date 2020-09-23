import { generateAuthActions } from 'redux-token-auth';
import deviseConfig from "../config/devise-token-auth";

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(deviseConfig)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
}
