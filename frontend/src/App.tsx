import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentList from './components/form/StudentList'
import { Box, Button } from '@mui/material'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Detail from './components/form/Detail'
import './App';

function App() {
  const navigate = useNavigate();
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='*' element={<h1>404 not found page!</h1>} />
          <Route path='/' element={<StudentList />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
