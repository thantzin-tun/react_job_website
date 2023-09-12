import { configureStore } from '@reduxjs/toolkit';
import { jobPostApi,jobInfoApi } from 'api';

export const store = configureStore({
  reducer: {
    [jobPostApi.reducerPath] : jobPostApi.reducer,
    [jobInfoApi.reducerPath] : jobInfoApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([jobInfoApi.middleware,jobPostApi.middleware]),
});
