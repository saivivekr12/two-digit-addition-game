import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quiz from './pages/Quiz'
import { Route, Routes } from "react-router-dom";
import StartPage from './pages/StartPage'



function App() {
  return (
    <Routes>
    <Route path="/" element={ <StartPage/> } />
    <Route path="/quiz" element={ <Quiz/> } />
  </Routes>
  )
}

export default App
