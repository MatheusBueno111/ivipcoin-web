import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios'
import { auth } from '../firebase'
import { PostTask } from '../types'

const instance = axios.create({
  baseURL: 'http://localhost:3333',
})

const authConfig = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const user = auth.currentUser
  const token = await user?.getIdToken()
  const configCopy = { ...config }
  if (configCopy.headers)
    (configCopy.headers as AxiosHeaders).set('Authorization', token)
  return configCopy
}

instance.interceptors.request.use(authConfig, (error) => Promise.reject(error))

export const api = {
  getTasks: () => instance.get('/tasks'),
  postTask: (task: PostTask) => instance.post('/tasks', task),
  deleteTask: (id: string) => instance.delete(`/tasks/${id}`),
  editTask: (task: PostTask, id: string) =>
    instance.patch(`/tasks/${id}`, task),
  toggleCompletedTask: (id: string) => instance.patch(`/tasks/${id}/toggle`),
}
