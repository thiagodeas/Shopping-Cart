import styled from 'styled-components';

export const StyledCart = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 330px;
  height: 80vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  padding: 100px 20px 20px;
  transform: translate(110%, 0);
  transition: all 500ms ease;

  ${({ $isCartVisible }) => $isCartVisible && `
      transform: translate(0,0)
  `}
`;

export const StyledCartItems = styled.div `
  flex-grow: 1;
  overflow: auto;

  > :last-child {
    border-bottom: none;
  }
`;

export const StyledCartResume = styled.div `
  font-size: 1.5rem;  
  font-weight: 500;
  padding: 35px 0 15px;
  border-top: 1px solid #ddd;
`;
