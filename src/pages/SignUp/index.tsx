import React from 'react'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const signUpFormSchema = z
  .object({
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de email inválido'),
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'No mínimo 6 caracteres'),
    confirmPassword: z
      .string()
      .nonempty('A confirmação da senha é obrigatória')
      .min(6, 'No mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não compatíveis',
  })
type signUpFormFormData = z.infer<typeof signUpFormSchema>

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<signUpFormFormData>({
    resolver: zodResolver(signUpFormSchema),
  })

  const handleSignUp = async ({ email, password }: signUpFormFormData) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      reset()
      toast.success('Usuário criado.')
      navigate('/signin')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <S.Container>
      <S.Title>Join to iVipCoin network!</S.Title>
      <S.Form onSubmit={handleSubmit(handleSignUp)}>
        <label htmlFor="email">E-mail:</label>
        <S.Input
          type="email"
          placeholder="John Doe"
          {...register('email')}
          autoComplete="off"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Senha:</label>
        <S.Input
          type="password"
          placeholder="********"
          {...register('password')}
          autoComplete="off"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="confirmPassword">Confirmar a senha:</label>
        <S.Input
          type="password"
          placeholder="********"
          {...register('confirmPassword')}
          autoComplete="off"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}

        <S.Button type="submit">Inscrever-se</S.Button>
      </S.Form>
      <S.Links to="/signin">Já possui login? Entrar!</S.Links>
    </S.Container>
  )
}

export default SignUp
