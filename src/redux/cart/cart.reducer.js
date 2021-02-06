import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //toggle <<<
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) //append items in cart <<<
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems
                .filter(cartItem => cartItem.id !== action.payload.id)//return only if id's do not match-- delete
            }
        case CartActionTypes.SUBTRACT_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)// remove one if exists, function in utils
            }
        default:
            return state;
    }
}

export default cartReducer;