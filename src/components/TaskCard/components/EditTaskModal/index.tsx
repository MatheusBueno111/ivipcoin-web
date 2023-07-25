import React from 'react'
import * as S from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Task } from '../../../../types'
import { api } from '../../../../services/api'
import { useTasks } from '../../../../contexts/TaskContext'
import { toast } from 'react-toastify'

interface EditTaskModalProps {
  onClose: () => void
  task: Task
}

const editTaskFormSchema = z.object({
  title: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
  content: z
    .string()
    .nonempty('This field is required')
    .min(1, 'At least 1 letters'),
})

type editTaskFormSchemaData = z.infer<typeof editTaskFormSchema>

const EditTaskModal: React.FC<EditTaskModalProps> = ({ onClose, task }) => {
  const { fetchTasks } = useTasks()

  const { register, handleSubmit, getValues } = useForm<editTaskFormSchemaData>(
    {
      resolver: zodResolver(editTaskFormSchema),
      defaultValues: {
        title: task.title,
        content: task.content,
      },
    },
  )

  const handleEditTask = async (data: editTaskFormSchemaData) => {
    const { title, content } = getValues()
    if (title === task.title && content === task.content) {
      onClose()
      toast.info('Task não atualizada.')
      return
    }
    const updatedTaskContent = {
      title: data.title,
      content: data.content,
    }

    try {
      await api.editTask(updatedTaskContent, task.id)
      fetchTasks()
      onClose()
      toast.success('Task atualizada.')
    } catch (error) {
      console.log(error)
      toast.error('Falha ao atualizar o task.')
    }
  }
  return (
    <S.Container>
      <p>What&apos;s on your mind?</p>
      <S.FormNewPost onSubmit={handleSubmit(handleEditTask)}>
        <S.Wrapper>
          <label htmlFor="title">Title</label>
          <S.Input type="text" placeholder="John Doe" {...register('title')} />
        </S.Wrapper>

        <S.Wrapper>
          <label htmlFor="content">Content</label>
          <S.TextArea placeholder="Content here" {...register('content')} />
        </S.Wrapper>

        <S.Buttons>
          <S.Cancel onClick={onClose}>Cancel</S.Cancel>
          <S.Save type="submit">Save</S.Save>
        </S.Buttons>
      </S.FormNewPost>
    </S.Container>
  )
}

export default EditTaskModal
