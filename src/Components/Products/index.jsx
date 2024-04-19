import React, { useEffect, useContext } from 'react';
import { StyledProductSection } from './Products.style';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard';
import Loading from '../Loading';
import AppContext from '../../context/AppContext';

function Products () {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);



  useEffect (() => {
    fetchProducts('iphone')
      .then((response) => {
        setProducts(response);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledProductSection>
          {products.map(product => (
            <ProductCard key={product.id} data={product} />
          ))}
        </StyledProductSection>
      )}
    </>
  );
}

export default Products;
