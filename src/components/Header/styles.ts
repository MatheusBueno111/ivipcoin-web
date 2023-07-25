import styled from 'styled-components'
import { Container as MuiContanier, Box as MuiBox } from '@mui/material'

export const Container = styled(MuiContanier)`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['black-300']};
  padding: 2.7rem 3.7rem;
`

export const Box = styled(MuiBox)`
  color: ${({ theme }) => theme.colors.orange};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const Login = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.6rem;
  font-weight: 700;
`

export const LogoutButton = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
`
