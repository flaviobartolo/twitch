import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

import Landing from './pages/Landing'
import Navigation from './pages/components/navigation/Navigation'

function App() {
  return <Router>
    <Navigation />
    <Landing />
  </Router>
}

export default App
