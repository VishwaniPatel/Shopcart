// authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../../firebase/firebase";

interface AuthState {
  user: any; // Replace with appropriate Firebase User type if available
  role: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  role: null,
  loading: false,
  error: null,
};

export const fetchUserRole = createAsyncThunk<string | null, string>(
  "auth/fetchUserRole",
  async (uid) => {
    try {
      const userRoleRef = ref(database, `users/${uid}/role`);
      const snapshot = await get(userRoleRef);
      return snapshot.val();
    } catch (error) {
      throw new Error(`Error fetching user role: ${error.message}`);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRole.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserRole.fulfilled, (state, action) => {
        state.loading = false;
        state.role = action.payload;
      })
      .addCase(fetchUserRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

export const initializeAuth = () => async (dispatch: any) => {
  const result = await getRedirectResult(auth);
  if (result) {
    const user = result.user;
    const userRef = ref(database, `users/${user.uid}`);
    const userSnapshot = await get(userRef);
    if (!userSnapshot.exists()) {
      await set(userRef, { role: "user" }); // Default role is 'user'
    }
    dispatch(setUser(user));
    dispatch(fetchUserRole(user.uid));
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(fetchUserRole(user.uid));
      } else {
        dispatch(clearUser());
      }
    });
  }
};
