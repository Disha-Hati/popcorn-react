import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Error from './Error';

const Body = () => {
  
  

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/error",
          element:<Error/>
        }
    ])

    

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
