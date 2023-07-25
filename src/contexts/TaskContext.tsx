import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from 'react'
import { Task } from '../types'
import { api } from '../services/api'

interface TaskContextType {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  taskCounterCompleted: number
  setTaskCounterCompleted: React.Dispatch<React.SetStateAction<number>>
  fetchTasks: () => Promise<void>
  isLoading: boolean
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskContextProviderProps {
  children: ReactNode
}

export const TaskContextProvider: React.FC<TaskContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskCounterCompleted, setTaskCounterCompleted] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const updatedCounterTaskCompleted = (allTasks: Task[]) => {
    const completedTasksCount = allTasks.reduce(
      (count, task) => (task.isCompleted === true ? count + 1 : count),
      0,
    )
    setTaskCounterCompleted(completedTasksCount)
  }

  const fetchTasks = async () => {
    try {
      setIsLoading(true)
      const response = await api.getTasks()
      const data = response.data
      updatedCounterTaskCompleted(data)
      setTasks(data)
    } catch (error) {
      alert('Algo deu errado, não foi possível buscar os posts')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        taskCounterCompleted,
        setTaskCounterCompleted,
        fetchTasks,
        isLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext)

  return context
}
