import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

import { auth } from './firebase'
import { TaskContextProvider } from './contexts/TaskContext'

const PrivateRoute = () => {
  const user = auth.currentUser
  console.log('user', user)
  if (!user) {
    return <Navigate to="/signin" />
  }
  return <Outlet />
}

export const Router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    index: true,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: (
          <TaskContextProvider>
            <Home />
          </TaskContextProvider>
        ),
      },
    ],
  },
])
