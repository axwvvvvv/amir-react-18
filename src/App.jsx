import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'

import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    

    <Routes>
    <Route path='/' element={<Home/>}/>
    
    </Routes>
    </>
  )
}

export default App