export interface Task {
  id: string
  title: string
  content: string
  createdAt: string
  userId: string
  isCompleted: boolean
}

export interface PostTask {
  title: string
  content: string
}
