import { RiLoader4Fill  } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

const spin = keyframes `
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
`;

export const StyledLoading = styled (RiLoader4Fill ) `
  font-size: 4rem;
  margin: 200px auto 0;
  width: 100%;
  animation: ${spin} 1s linear infinite;
`;

