import React from 'react'
import { Task } from '../../../../types'
import TaskCard from '../../../../components/TaskCard'
import Loader from '../../../../components/Loader'

interface TaskListProps {
  tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />
        })
      ) : (
        <Loader />
      )}
    </>
  )
}

export default TaskList
