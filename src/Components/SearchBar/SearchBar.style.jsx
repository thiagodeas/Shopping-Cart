import styled from 'styled-components';

export const StyledForm = styled.form `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  gap: 13px;
  padding-right: 13px;
  
  input {
    width: 100%;
    padding: 13px;
    border: none;
    outline: none;
    border-right: 1px solid #ddd;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    background: none;
    border: none;
    outline: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const StyledProductSection = styled.section `
  padding: 120px 20px 50px;
  max-width: 1100px;
  margin: 0 auto;
`;


