import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { StyledCardName, StyledCardPrice, StyledProductCard } from './ProductCard.style';
import { FaCartArrowDown } from 'react-icons/fa';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard ({data}) {

  const {title, price, thumbnail} = data;
  
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([ ...cartItems, data ]);
  };

  return (
    <StyledProductCard>
      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" />
      <div>
        <StyledCardPrice>{formatCurrency(price, 'BRL')}</StyledCardPrice>
        <StyledCardName>{title}</StyledCardName>
      </div>  
      <button type="button" onClick={ handleAddCart }> <FaCartArrowDown /> </button>
    </StyledProductCard>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

