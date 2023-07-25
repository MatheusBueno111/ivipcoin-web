import styled from 'styled-components'
import { Container as MuiContanier } from '@mui/material'

export const Container = styled(MuiContanier)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: ${({ theme }) => theme.colors['black-300']};
  padding: 2.4rem;

  p {
    font-size: 2.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`

export const FormNewPost = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1rem;
    font-weight: 700;
  }

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  padding: 0.9rem 1.4rem;
  color: ${({ theme }) => theme.colors['gray-500']};
  background-color: ${({ theme }) => theme.colors['black-300']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    opacity: 0.4;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const TextArea = styled.textarea`
  display: flex;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  padding: 0.9rem 1.4rem;
  max-width: 100%;
  height: 7.5rem;
  font-family: 'Roboto';
  background-color: ${({ theme }) => theme.colors['black-300']};
  color: ${({ theme }) => theme.colors['gray-500']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    opacity: 0.4;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  max-width: 11.1rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border-radius: 0.8rem;
  padding: 0.7rem 3rem;
  align-self: end;
  margin-top: 0.8rem;

  &:not(:disabled) {
    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.orange};

    &:hover {
      opacity: 0.9;
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['gray-500']};
    cursor: not-allowed;

    &:hover {
      opacity: 0.9;
    }
  }
`
