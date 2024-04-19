import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { StyledRemoveButton, StyledCartContent, StyledCartImage, StyledCartItems, StyledCartPrice, StyledCartTitle } from './CartItem.style';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem ({data}) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const { id, title, price, thumbnail } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems); 
  };

  return (
    <StyledCartItems>
      <StyledCartImage 
        src= {thumbnail}
        alt= "Imagem do produto"
      />
      <StyledCartContent>
        <StyledCartTitle> {title} </StyledCartTitle>
        <StyledCartPrice> {formatCurrency(price, 'BRL')} </StyledCartPrice>
        <StyledRemoveButton 
          type="button" onClick={ handleRemoveItem }> <MdRemoveShoppingCart />
        </StyledRemoveButton>
      </StyledCartContent>
    </StyledCartItems>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object.isRequired,
};
