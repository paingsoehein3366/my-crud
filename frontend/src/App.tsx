import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentList from './components/form/StudentList'
import { Box, Button } from '@mui/material'
import { Route, Router, Routes, useNavigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import ReactQuery from './lib/react-query'
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
          <Route path='/react-query' element={<ReactQuery />} />
          <Route path='/students' element={<StudentList />} />
          <Route path='/students/detail/:id' element={<Detail />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
