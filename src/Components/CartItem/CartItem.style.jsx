import styled from 'styled-components';

export const StyledCartItems = styled.section `
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const StyledCartImage = styled.img `
  width: 70px;
`;

export const StyledCartContent = styled.div `
  padding: 0 35px 0 10px;
`;

export const StyledCartTitle = styled.h3 `
  font-size: 1rem;
  font-weight: 500;
  color: #00000080;
  margin-bottom: 8px;
`;

export const StyledCartPrice = styled.h3 `
  font-size: 1.50rem;
  font-weight: 500;
`;

export const StyledRemoveButton = styled.button `
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: #c41a1a;
  font-size: 1.4rem;
`;
