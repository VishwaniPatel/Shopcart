import { createContext } from "react";
import {
  IAuthContext,
  ILoadingContext,
} from "../core/utility/models/auth.model";

const AuthContext = createContext<IAuthContext>({
  authData: null,
  setAuthData: () => {},
});
const LoadingContext = createContext<ILoadingContext>({
  loading: false,
  setLoading: () => {},
});

export { AuthContext, LoadingContext };
