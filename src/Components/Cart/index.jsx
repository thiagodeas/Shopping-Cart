import React, { useContext } from 'react';
import { StyledCart, StyledCartItems, StyledCartResume } from './Cart.style';
import CartItem from '../CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart () {

  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  const cartContent = isCartVisible? (
    <StyledCartItems>
      {
        cartItems.map ((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))
      }
    </StyledCartItems>
  ) : null;

  return (
    <StyledCart $isCartVisible= {isCartVisible}>
      {cartContent}
      <StyledCartResume>{formatCurrency(totalPrice, 'BRL')}</StyledCartResume>
    </StyledCart>
  );
}

export default Cart;
