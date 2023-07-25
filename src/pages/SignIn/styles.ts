import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;

  background-color: ${({ theme }) => theme.colors['black-300']};
  border-radius: 1.6rem;
  padding: 2.4rem;
  gap: 2.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Title = styled.h1`
  display: flex;
  font-weight: 700;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.orange};
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors['gray-500']};
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
  }
`

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  background-color: ${({ theme }) => theme.colors['black-300']};
  color: ${({ theme }) => theme.colors['gray-500']};
  padding: 0.9rem 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-300']};
    opacity: 0.4;
    font-size: 1.2rem;
    font-weight: 400;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors['black-500']};
  font-weight: 700;
  border-radius: 0.8rem;
  padding: 0.7rem 3rem;
  align-self: center;
  margin-top: 1.5rem;

  &:not(:disabled) {
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

export const Links = styled(Link)`
  color: ${({ theme }) => theme.colors['gray-300']};
  text-decoration: underline;
  opacity: 0.5;
  align-self: center;
  margin-top: 1rem;
  :hover {
    color: ${({ theme }) => theme.colors['gray-300']};
    opacity: 0.9;
  }
`
