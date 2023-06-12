import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import chatReducer from "./chatSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>