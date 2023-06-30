import { createSlice } from '@reduxjs/toolkit'
import { addItemCart, removeItemFromCart, resetShippingCost } from './cart-utils'
import { SHIPPING_COST } from '../../utils/constants'

const INITIAL_STATE = {
    cartItems: [],
    shippingCost: 0,
    hidden: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemCart(state.cartItems, action.payload),
                shippingCost: SHIPPING_COST,

            }
        },
        toggleHiddenCart: state => {
            return {
                ...state,
                hidden: !state.hidden
            }
        },
        clearCart: state => {
            return {
                ...state,
                cartItems: [],
                shippingCost: 0
            }
        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST)
            }
        }
    }
})

export const { addToCart, toggleHiddenCart, clearCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;