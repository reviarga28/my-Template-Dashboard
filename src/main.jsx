import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageOne from './pages/PageOne'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PageOne/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
