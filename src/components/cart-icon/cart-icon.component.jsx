import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, numOfItems }) => {
  console.log(numOfItems);
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{numOfItems}</span>
    </div>
  );
};

const mapStateToProp = ({ cart: { cartItems } }) => ({
  numOfItems: cartItems.length,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProp, mapDispatchToProps)(CartIcon);
