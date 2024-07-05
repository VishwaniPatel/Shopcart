import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../pages/user/utility/services/user.service";
import { adminApi } from "../pages/admin/utility/services/admin.service";

const store = configureStore({
  reducer: {
    // Add the RTK Query API slice reducer
    [userApi.reducerPath]: userApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, adminApi.middleware]),
});

export default store;
