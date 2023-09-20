import {configureStore,} from  "@reduxjs/toolkit"; 
import cartReducer from "./cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
 import userReducer from "./userSlice"
 import {
   
    persistReducer,
   
  } from 'redux-persist' ; 
  import storage from 'redux-persist/lib/storage'; 
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
   const reducer = combineReducers({
    cart: cartReducer, 
    user: userReducer
   })
  
  const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
     reducer  : persistedReducer
     
}); 

 
