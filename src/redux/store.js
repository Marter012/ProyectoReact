import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import categoriesReducer from './categories/categoriesSlice'
import productsReducer from './products/productsSlice'
import recommendedReducer from './recommended/recommendedSlice'
import cartReducer from './cart/cartSlice'
import userReducer from './user/userSlice'

const reducers = combineReducers({
    //Add reducers here
    categories: categoriesReducer,
    products: productsReducer,
    recommended: recommendedReducer,
    cart : cartReducer,
    user : userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whileList: ['cart','user']
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck : false})
})

export const persistor = persistStore(store)