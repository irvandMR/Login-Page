import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css"; 

import "primeflex/primeflex.css";
import { mainRoutes } from './router/main.routes';
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={mainRoutes}></RouterProvider>
  </React.StrictMode>,
)
