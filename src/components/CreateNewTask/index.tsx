import React from 'react'
import * as S from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { useTasks } from '../../contexts/TaskContext'
import { toast } from 'react-toastify'

const createNewTaskFormSchema = z.object({
  title: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
  content: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
})

type CreateNewTaskFormData = z.infer<typeof createNewTaskFormSchema>

const CreateNewTask: React.FC = () => {
  const { fetchTasks } = useTasks()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateNewTaskFormData>({
    resolver: zodResolver(createNewTaskFormSchema),
  })

  const handleNewTask = async (data: CreateNewTaskFormData) => {
    const newTask = {
      title: data.title,
      content: data.content,
    }
    try {
      await api.postTask(newTask)
      fetchTasks()
      reset()
      toast.success('Task criada')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao criar a task')
    }
  }

  return (
    <S.Container maxWidth="md" sx={{ display: 'flex' }}>
      <p>Let&apos;s create a Task?</p>
      <S.FormNewPost onSubmit={handleSubmit(handleNewTask)}>
        <S.Wrapper>
          <label htmlFor="title">Title</label>
          <S.Input type="text" placeholder="New Task" {...register('title')} />
          {errors.title && <span>{errors.title.message}</span>}
        </S.Wrapper>

        <S.Wrapper>
          <label htmlFor="content">Content</label>
          <S.TextArea placeholder="Content here" {...register('content')} />
          {errors.content && <span>{errors.content.message}</span>}
        </S.Wrapper>

        <S.Button type="submit">Create</S.Button>
      </S.FormNewPost>
    </S.Container>
  )
}

export default CreateNewTask
