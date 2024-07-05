import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/auth.model";
import { auth } from "../../../firebase/firebase";
// Function to fetch user data from Firebase Realtime Database
const fetchUserData = async (userId: string) => {
  const snapshot = await db.ref(`users/${userId}`).once("value");
  return snapshot.val();
};
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, { email: string; password: string }>({
      query: ({ email, password }) => {
        return auth.signInWithEmailAndPassword(email, password);
      },
    }),
    signup: builder.mutation<
      any,
      { email: string; password: string; role: string }
    >({
      query: ({ email, password, role }) => {
        return auth
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            return db.ref(`users/${user.uid}`).set({
              email,
              role,
            });
          });
      },
    }),
    getUserData: builder.query<any, string>({
      query: (userId) => fetchUserData(userId),
    }),
  }),
});

// Export hooks for usage in components
export const { useLoginMutation, useSignupMutation, useGetUserDataQuery } =
  authApi;
