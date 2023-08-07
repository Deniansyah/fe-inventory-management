import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/reducer"
import { usersReducer } from "./users/reducer";
import { productReducer } from "./product/reducer";

import { 
  persistStore,
  persistReducer,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PURGE,
} from "redux-persist";
import  storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  product: productReducer,
})

const persistConfig = {
  key: "data",
  storage,
  blacklist: ["users","product"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE],
      },
      thunk: true,
    });
  },
});

export const persistedStore = persistStore(store)