import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeaderBanner from './Components/Header-banner/HeaderBanner'
import ErrorPage from './Components/Error-page/ErrorPage'
import JobList from './Components/JobList/JobList'
import Statistics from './Components/Statistics/Statistics'
import JobDetails from './Components/JobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HeaderBanner></HeaderBanner>,
        loader: () => fetch('JobsData.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'job details',
        element: <JobDetails></JobDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
