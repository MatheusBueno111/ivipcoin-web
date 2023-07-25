import styled from 'styled-components'
import { Box as MuiBox, Divider as MuiDivider } from '@mui/material'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['black-500']};
`

export const Divider = styled(MuiDivider)`
  justify-content: center;
  width: 90rem;
`

export const Main = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  width: 90rem;
`

export const TasksInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors['gray-300']};
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors['black-300']};
  font-size: 1.2rem;
  font-weight: 700;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  span {
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 9999rem;
    padding: 0.25rem;
  }
`
