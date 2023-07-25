import React from 'react'
import * as S from './styles'
import { api } from '../../../../services/api'
import { useTasks } from '../../../../contexts/TaskContext'
import { toast } from 'react-toastify'

interface DeleteTaskModalProps {
  onClose: () => void
  taskId: string
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  onClose,
  taskId,
}) => {
  const { fetchTasks } = useTasks()
  const handleDeletePost = async (id: string) => {
    try {
      await api.deleteTask(id)
      onClose()
      fetchTasks()

      toast.success('Task deletada')
    } catch (error) {
      console.error(error)
      toast.error('Não foi possível deletar')
    }
  }

  return (
    <S.Container>
      <p>Are you sure you want to delete this item?</p>
      <S.Buttons>
        <S.Cancel onClick={onClose}>Cancel</S.Cancel>
        <S.Delete onClick={() => handleDeletePost(taskId)}>Delete</S.Delete>
      </S.Buttons>
    </S.Container>
  )
}

export default DeleteTaskModal
