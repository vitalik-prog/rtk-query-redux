import { postAPI } from './../services/PostService';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './reducers/UserSlice';

const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
