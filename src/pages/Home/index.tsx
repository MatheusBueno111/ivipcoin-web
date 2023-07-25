import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import CreateNewTask from '../../components/CreateNewTask'
import TaskList from './components/TaskList'
import { useTasks } from '../../contexts/TaskContext'

const Home: React.FC = () => {
  const { tasks, taskCounterCompleted } = useTasks()

  return (
    <S.Container>
      <Header />
      <S.Divider color="#777777" />
      <S.Main>
        <CreateNewTask />
        <S.TasksInfo>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluidas{' '}
            <span>
              {taskCounterCompleted} de {tasks.length}
            </span>
          </p>
        </S.TasksInfo>
        <TaskList tasks={tasks} />
      </S.Main>
    </S.Container>
  )
}

export default Home
