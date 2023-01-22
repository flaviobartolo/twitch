import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './pages/css/main.scss'

import Landing from './pages/Landing'
import Navigation from './pages/components/navigation/Navigation'

function App() {
  return <Router>
    <Navigation />
    <Landing />
  </Router>
}

export default App
