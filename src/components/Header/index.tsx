import React from 'react'
import * as S from './styles'
import { Divider } from '@mui/material'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      // Faz o logout do usuário usando o Firebase
      await signOut(auth)
      navigate('/signin')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  return (
    <S.Container maxWidth="md" sx={{ display: 'flex' }}>
      <S.Box component="h1">iVipCoin</S.Box>
      <S.Wrapper>
        <S.Login>Welcome</S.Login>
        <Divider orientation="vertical" sx={{ backgroundColor: '#F48F01' }} />
        <S.LogoutButton onClick={handleSignOut}>Logout</S.LogoutButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
