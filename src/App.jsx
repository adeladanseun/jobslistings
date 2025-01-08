import './App.css'
import './assets/styles/general.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import JobWrapper, { errElement, JobLoaderFunction } from './components/JobWrapper'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/jobslistings' element={<MainLayout />}>
        <Route index element={<JobWrapper />} loader={JobLoaderFunction} errorElement={<errElement />}/>
      </Route> 
    )
  )
  return <RouterProvider router={router} />
}

export default App
