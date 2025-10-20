import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeroUIProvider } from '@heroui/react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './pages/auth/index.tsx'
import Layout from './components/layout/index.tsx'
import Posts from './pages/posts/index.tsx'
import Following from './pages/following/index.tsx'
import Followers from './pages/followers/index.tsx'
import CurrentPost from './pages/current-post/index.tsx'
import UserProfile from './pages/user-profile/index.tsx'

const routes = createBrowserRouter([
  {
    path:'/auth',
    element:<Auth/>
  },
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Posts/>
      },
      {
        path:'following',
        element:<Following/>
      },
      {
        path:'followers',
        element:<Followers/>
      },
      {
        path:'posts/:id',
        element:<CurrentPost/>
      },
      {
        path:'users/:id',
        element:<UserProfile/>
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HeroUIProvider>
      <RouterProvider
      router={routes}
      />
      </HeroUIProvider>
    </Provider>
  </StrictMode>,
)
