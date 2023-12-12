import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='lg:max-w-6xl lg:mx-auto md:max-w-2xl md:mx-auto max-w-sm mx-auto'>
   <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
