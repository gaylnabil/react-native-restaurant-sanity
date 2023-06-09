import { configureStore } from "@reduxjs/toolkit";
import { featuredReducer} from './slices/FeaturedSlice'
import { categoryReducer } from "./slices/catgorieSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from 'redux-thunk';
import { restaurantReducer } from "./slices/restaurantSlice";
import { basketReducer } from "./slices/basketSlice";
// Configure and return service decorator store. This is a wrapper around configureStore ()

export const store = configureStore({
  reducer: {
    featuredStore: featuredReducer,
    categoryStore: categoryReducer,
    restaurantStore: restaurantReducer,
    basketStore: basketReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),  
});

console.log("store: ", store);
console.log("store.getState() : ", store.getState());

export const useAppDispatch:()=> typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
export type RootState = ReturnType<typeof store.getState>
