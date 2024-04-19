import styled from 'styled-components';

export const StyledProductSection = styled.section `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 120px 20px 50px;
  max-width: 1100px;
  margin: 0 auto;
  gap: 25px;
`;
