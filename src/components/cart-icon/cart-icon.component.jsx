import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

export const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
// export default CartIcon
