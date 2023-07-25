import React, { useState } from 'react'
import * as S from './styles'
import Modal from '../Modal'
import DeleteTaskModal from './components/DeleteTaskModal'
import EditTaskModal from './components/EditTaskModal'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { Task } from '../../types'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import { useTasks } from '../../contexts/TaskContext'
import { api } from '../../services/api'
import {
  calcularTempoPassadoEmSegundos,
  converterParaMinutosHorasDias,
} from '../../utils/formattedTime'

interface TaskCardProps {
  task: Task
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { tasks, setTasks, setTaskCounterCompleted } = useTasks()

  const [modalType, setModalType] = useState<'delete' | 'edit' | null>(null)

  const handleOpenModal = (type: 'delete' | 'edit') => {
    setModalType(type)
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  const modalContent = {
    delete: <DeleteTaskModal onClose={handleCloseModal} taskId={task.id} />,
    edit: <EditTaskModal onClose={handleCloseModal} task={task} />,
  }

  const handleToggleTask = async (id: string) => {
    try {
      const updatedTasks = tasks.map(
        (task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
        task.id === id && task.isCompleted === true
          ? setTaskCounterCompleted((count) => {
              return count - 1
            })
          : setTaskCounterCompleted((count) => {
              return count + 1
            }),
      )
      setTasks(updatedTasks)
      await api.toggleCompletedTask(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{task.title}</S.Title>
        <S.ConfigButton>
          <DeleteForeverIcon
            sx={{ fontSize: 32 }}
            onClick={() => handleOpenModal('delete')}
          />
          <EditNoteIcon
            sx={{ fontSize: 32 }}
            onClick={() => handleOpenModal('edit')}
          />
          {task.isCompleted === false ? (
            <CheckBoxOutlineBlankIcon
              sx={{ fontSize: 32 }}
              onClick={() => handleToggleTask(task.id)}
            />
          ) : (
            <CheckBoxIcon
              sx={{ fontSize: 32 }}
              className="checkbox-checked"
              onClick={() => handleToggleTask(task.id)}
            />
          )}
        </S.ConfigButton>
      </S.Header>
      <S.Wrapper>
        <S.CardInfo>
          <span>
            {converterParaMinutosHorasDias(
              calcularTempoPassadoEmSegundos(task.createdAt),
            )}
            &nbsp;atrás
          </span>
        </S.CardInfo>
        <S.Content>{task.content}</S.Content>
      </S.Wrapper>

      {modalType && (
        <Modal onCloseOverlay={handleCloseModal}>
          {modalContent[modalType]}
        </Modal>
      )}
    </S.Container>
  )
}

export default TaskCard
