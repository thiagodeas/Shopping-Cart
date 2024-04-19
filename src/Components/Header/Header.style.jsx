import styled from 'styled-components';

export const StyledHeader = styled.header `
  width: 100%;
  background-color: #fff159;
  position: fixed;
  z-index: 1;
`;

export const StyledForm = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.25rem;
`;

export const StyledButton = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: relative;
  margin-left: 20px;
  color: #333;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
  }
`;
