import React, { useState, useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { StyledForm } from './SearchBar.style';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar () {

  const [searchValue, setSearchValue] = useState (''); 

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <>
      <StyledForm onSubmit={handleSearch}>
        <input 
          type="search" 
          value= {searchValue}
          placeholder="Buscar produtos" 
          onChange = {(event) => setSearchValue(event.target.value)}
          required
        />
        <button type="submit"> <IoIosSearch /> </button>
      </StyledForm>
    </>
  );
}

export default SearchBar;
