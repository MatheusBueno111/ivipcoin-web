import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  p {
    color: ${({ theme }) => theme.colors['gray-500']};
    font-size: 2.2rem;
    font-weight: 700;
  }
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
    color: ${({ theme }) => theme.colors['gray-500']};
    font-weight: 700;
  }
`

export const Input = styled.input`
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  background-color: ${({ theme }) => theme.colors['black-300']};
  padding: 0.9rem 1.4rem;
  color: ${({ theme }) => theme.colors['gray-500']};

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
  background-color: ${({ theme }) => theme.colors['black-300']};
  padding: 0.9rem 1.4rem;
  max-width: 100%;
  height: 7.5rem;
  color: ${({ theme }) => theme.colors['gray-500']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
    opacity: 0.4;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  justify-content: flex-end;
`

export const Cancel = styled.button`
  padding: 0.7rem 3.2rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-600']};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.white};
  width: 12rem;
`

export const Save = styled.button`
  padding: 0.7rem 3.2rem;
  border-radius: 0.8rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  width: 12rem;
`
