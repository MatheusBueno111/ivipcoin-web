import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 39.9rem;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  border: 0.8rem solid ${({ theme }) => theme.colors['gray-500']};
  border-top: 0.8rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
