import styled from 'styled-components';

export const StyledProductCard = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  background-color: #ffffff;
  cursor: pointer;
  margin: 0 auto;
  position: relative;
  transition: 500ms;

  &:hover {
    box-shadow: 2px 2px 8px #b4b4b4;

    button {
      opacity: 1;
    }
  }

  img {
    max-width: 100%;  
    height: auto;
  }

  div {
    padding: 20px;
    border-top: 1px solid #ddd;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    margin: 12px 15px;
    outline: none;
    color: #0c5dd6;
    background-color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
  }
`;

export const StyledCardPrice = styled.h2 `
  font-size: 2rem;
  font-weight: 400;
  display: block;
  margin-bottom: 8px;
`;

export const StyledCardName = styled.h2 `
  font-size: 1rem;
  font-weight: 500;
  color: #000000c0;
`;
