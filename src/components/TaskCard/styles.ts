import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors['black-300']};
  padding: 2.4rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-600']};
  background-color: ${({ theme }) => theme.colors['black-300']};
  border-top-right-radius: 1.6rem;
  border-top-left-radius: 1.6rem;
`

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['gray-500']};
`

export const ConfigButton = styled.div`
  display: flex;
  gap: 2.4rem;

  svg {
    color: ${({ theme }) => theme.colors.white};
    :hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  .checkbox-checked {
    color: ${({ theme }) => theme.colors.orange};
    :hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  border-bottom-right-radius: 1.6rem;
  border-bottom-left-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-600']};
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;

  span {
    color: ${({ theme }) => theme.colors['gray-300']};
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const Content = styled.p`
  text-align: justify;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors['gray-500']};
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
  width: 12srem;
`

export const Delete = styled.button`
  padding: 0.7rem 3.2rem;
  border-radius: 0.8rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 12rem;
`
