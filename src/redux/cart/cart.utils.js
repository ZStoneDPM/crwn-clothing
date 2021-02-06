export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(exisitingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity +1}
            : cartItem
            )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    //find in cartItems object where cartitems to remove has same id
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    )

    if(exisitingCartItem.quantity === 1) {
        //if ids do not match, return cartitems as is
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id) 
    }

    return cartItems.map(cartItem =>
        //if id matches, subtract one
        cartItem.id === cartItemsToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}