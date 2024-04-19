import React, { useContext } from 'react';
import { StyledButton, StyledForm, StyledHeader } from './Header.style';
import Container from '../Container';
import SearchBar from '../SearchBar';
import { FiShoppingCart  } from 'react-icons/fi';
import AppContext from '../../context/AppContext';


function Header () {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
  return (
    <StyledHeader>
      <Container>
        <StyledForm>
          <SearchBar />
          <StyledButton onClick={ () => setIsCartVisible(!isCartVisible)}>
            <FiShoppingCart />
            {
              cartItems.length > 0 && <span>{cartItems.length}</span>
            }
          </StyledButton>
        </StyledForm>
      </Container>
    </StyledHeader>
  );
}

export default Header;
